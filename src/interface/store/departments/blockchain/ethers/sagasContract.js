/* --- Global Modules --- */
import idx from 'idx';
import ethers from 'ethers'
import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions'
import { networkRouting } from "./helpers"
// Initialize
const Wallet = ethers.Wallet;
const providers = ethers.providers;

const walletSelection = (network, provider) => {
  switch (idx(network, _=>_.wallet)) {
    case 'testing':
      var wallet = new ethers.Wallet("0xE09B4A3506A843D477F54A63A8786655FB0D00D99287C71F10993F2031DBE5DC");
            wallet.provider = provider
      return wallet
    default:
      var wallet = new ethers.Wallet("0xE09B4A3506A843D477F54A63A8786655FB0D00D99287C71F10993F2031DBE5DC");
          wallet.provider = provider;
      return wallet

  }
}

/* --- Contract Sagas --- */
export function * contractInitialize ({payload, metadata}) {
  try {
    const { network, delta } = metadata
    const {ethAddress, ethAbi, ethereumPrivateKey, contractName } = payload
    if (!contractName) throw new Error("Ethers: Contracts must be created with a name identifier.")
    // Initialize Provider
    const provider = networkRouting(network);
    // Create Contact
    let contract;
    if(ethereumPrivateKey) {
      const wallet = new Wallet(ethereumPrivateKey);
      wallet.provider = provider
      contract = new ethers.Contract(ethAddress, ethAbi, wallet);
    } else {
      contract = new ethers.Contract(ethAddress, ethAbi, provider);
    }

    window.ethereum.contracts[contractName] = contract
    yield put(actions.contractCreate("SUCCESS")(
      contract,
      metadata,
    ))
  } catch (err) {
    if(process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
    yield put(actions.contractCreate("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * contractCall ({payload, metadata}) {
  try {
    const { contractName, contractFunction, contractParams } = payload
    const contract = window.ethereum.contracts[contractName]
    if (!contract[contractFunction]) throw new Error("Ethers: Contracts function doesn't exist")
    const response = contractParams 
      ? yield contract[contractFunction](...contractParams) 
      : yield contract[contractFunction]()
    yield put(actions.contractCall("SUCCESS")(
      response,
      metadata,
    ))
  } catch (err) {
    if(process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
    yield put(actions.contractCall("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * contractEstimateGas ({payload, metadata}) {
  try {

    yield put(actions.contractEstimateGas("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.contractEstimateGas("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * contractSendTransaction ({payload, metadata}) {
  try {

    yield put(actions.contractSendTransaction("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.contractSendTransaction("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * contractDeploy ({payload, metadata}) {
  try {
    const { network } = metadata;
    const { bytecode, abi, params } = payload;
    const provider = networkRouting(network);
    const wallet = walletSelection(network, provider);

    /**
     * Sign Smart Contract Transaction Message
     * 
     * TODO(@kamescg) For popular/verified Smart Contracts create on-chain factories
     * to save gas costs on initialization/deployment for users.
     */
    const deployTransaction = ethers.Contract.getDeployTransaction(
      bytecode, abi,
      ...params
    );

    // Transaction Hash
    const transaction = yield wallet.sendTransaction(deployTransaction);

    yield put(actions.contractDeploy("SUCCESS")(
      transaction,
      metadata,
    ));
  } catch (err) {
    if (process.env.REACT_APP_GLOBAL_DEBUG) console.log(err);
    yield put(actions.contractDeploy("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}