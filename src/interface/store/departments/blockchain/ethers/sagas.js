/* ------------------------- External Dependencies -------------------------- */
import idx from 'idx';
import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions'
import ethers from 'ethers'
// import { EthersBlockFlowIn } from 'logic/interface/DataScaffold'
import MetamaskSigner from './metamask.js'
import {ERC20} from 'contracts'
import { networkRouting, isAddress } from "./helpers";
// Initialize
const Wallet = ethers.Wallet;
const Contract = ethers.Contract;
const providers = ethers.providers;


// Ethereum Name System (ENS) Sagas
import {
  ensResolveName,
  ensLookupAddress
} from "./sagasEns.js";

// Wallet Sagas
import {
  contractInitialize,
  contractCall,
  contractEstimateGas,
  contractSendTransaction,
  contractDeploy,
} from "./sagasContract.js";
// Wallet Sagas
import {
  walletSign,
  walletSignMessage,
  walletGenerateRandom,
  walletGenerateJson,
  walletGenerateMenomonic,
  walletGenerateBrain
} from "./sagasWallet.js";

/* ------------------------- Internal Dependencies -------------------------- */
export function * providerInfura ({payload, metadata}) {
  try {
    const { network } = payload
    const infuraProvider = new providers.InfuraProvider(network.chain || 'homestead');
    window.ethereum.providers.infura = infuraProvider
    yield put(actions.providerInfura("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    if(process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
    yield put(actions.providerInfura("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * accountHistory ({payload, metadata}) {
  try {
    console.log(payload)
    const { ethAddress, blockStart, blockEnd } = payload;
    const provider = new providers.EtherscanProvider('rinkeby');
    var endBlock = 3038013;
    const history = yield provider.getHistory(ethAddress, blockStart || 0, endBlock);
    console.log(history)
    yield put(actions.accountBalance("SUCCESS")(
      history,
      metadata,
    ))
  } catch (err) {
    yield put(actions.accountBalance("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 export function * accountBalance ({payload, metadata}) {
  try {
    const { network } = metadata
    const provider = networkRouting(network)
    const { address } = payload
    const balance = yield provider.getBalance(payload)
    const balanceFormatted = ethers.utils.formatEther(balance);
    yield put(actions.accountBalance("SUCCESS")(
      balanceFormatted,
      metadata,
    ))
  } catch (err) {
    yield put(actions.accountBalance("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * accountTransactionCount ({payload, metadata}) {
  try {
    const { network } = metadata;
    const provider = networkRouting(network);
    const transactionCount = yield provider.getTransactionCount(payload);
    yield put(actions.accountTransactionCount("SUCCESS")(
      transactionCount,
      metadata,
    ))
  } catch (err) {
    if(process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
    yield put(actions.accountTransactionCount("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



export function * transactionsBatchProcess({payload, metadata}) {
  try {
    const { 
      ethereumAddressList,
      ethereumGasPrice,
      ethereumGasLimit,
      ethereumTokenAmount
    } = payload

    var overrideOptions = {
        gasLimit: ethereumGasLimit || 250000,
        gasPrice: ethereumGasPrice || 9000000000,
    };
    const results = []
    const list = ethereumAddressList.split(",").filter(address=>isAddress(address))
    for (let i of list) {
      let result = yield window.ethereum.contracts.tokenContract.transfer(i, Number(ethereumTokenAmount), overrideOptions)
      results.push(result)
    }
  
    yield put(actions.transactionBatchProcess("SUCCESS")(
      results,
      metadata,
    ))
  } catch (err) {
    yield put(actions.transactionBatchProcess("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export default function* ethersSaga() {
  yield all([
    takeEvery(actions.ACCOUNT_BALANCE.REQUEST, accountBalance),
    takeEvery(actions.ACCOUNT_TRANSACTIONCOUNT.REQUEST, accountTransactionCount),
    takeEvery(actions.ACCOUNT_HISTORY.REQUEST, accountHistory),

    takeEvery(actions.WALLET_SIGN.REQUEST, walletSign),
    takeEvery(actions.WALLET_SIGNMESSAGE.REQUEST, walletSignMessage),
    // takeEvery(actions.WALLET_GENERATE_RANDOM.REQUEST, walletGenerateRandom),
    // takeEvery(actions.WALLET_GENERATE_JSON.REQUEST, walletGenerateJson),
    // takeEvery(actions.WALLET_GENERATE_MENOMONIC.REQUEST, walletGenerateMenomonic),
    // takeEvery(actions.WALLET_GENERATE_BRAIN.REQUEST, walletGenerateBrain),
    // takeEvery(actions.WALLET_ADDRESS.REQUEST, walletAddress),
    // takeEvery(actions.WALLET_ENCRYPT.REQUEST, walletEncrypt),

    // takeEvery(actions.BLOCKCHAIN_BLOCK_NUMBER.REQUEST, blockchainBlockNumber),
    // takeEvery(actions.BLOCKCHAIN_GAS_PRICE.REQUEST, blockchainGasPrice),
    // takeEvery(actions.BLOCKCHAIN_BLOCK.REQUEST, blockchainBlock),
    // takeEvery(actions.BLOCKCHAIN_TRANSACTION.REQUEST, blockchainTransaction),
    // takeEvery(actions.BLOCKCHAIN_TRANSACTION_RECEIPT.REQUEST, blockchainTransactionReceipt),

    // takeEvery(actions.ENS_RESOLVE_NAME.REQUEST, ensResolveName),
    // takeEvery(actions.ENS_LOOKUPADDRESS.REQUEST, ensLookupAddress),

    // takeEvery(actions.PROVIDER_ETHERSCAN.REQUEST, providerEtherscan),
    // takeEvery(actions.PROVIDER_JSONRPC.REQUEST, providerJsonRpc),
    // takeEvery(actions.PROVIDER_INFURA.REQUEST, providerInfura),
    // takeEvery(actions.PROVIDER_FALLBACK.REQUEST, providerFallback),
    // takeEvery(actions.PROVIDER_DEFAULT.REQUEST, providerDefault),

    takeEvery(actions.CONTRACT_CREATE.REQUEST, contractInitialize),
    takeEvery(actions.CONTRACT_CALL.REQUEST, contractCall),
    takeEvery(actions.CONTRACT_ESTIMATE_GAS.REQUEST, contractEstimateGas),
    takeEvery(actions.CONTRACT_SEND_TRANSACTION.REQUEST, contractSendTransaction),
    takeEvery(actions.CONTRACT_DEPLOY.REQUEST, contractDeploy),


    // ADDITIONAL 
    takeEvery(actions.TRANSACTION_BATCH_PROCESS.REQUEST, transactionsBatchProcess),
  ]);
}