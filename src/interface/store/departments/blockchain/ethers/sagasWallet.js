/* --- Global Modules --- */
import idx from 'idx';
import ethers from 'ethers'
import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions'
import { networkRouting } from "./helpers"

// Initialize
const Wallet = ethers.Wallet;
const providers = ethers.providers;
const utils = ethers.utils

/* --- Wallet Sagas --- */
const provider = new providers.InfuraProvider('rinkeby');
var privateKey = "0xE09B4A3506A843D477F54A63A8786655FB0D00D99287C71F10993F2031DBE5DC";
var wallet = new Wallet(privateKey);
wallet.provider = provider;


const accountNonce = async wallet => await wallet.getTransactionCount();

const transactionGenerate = async (payload, metadata, wallet) => {
  const { type, network } = metadata;
  const nonce = await accountNonce(wallet);
  switch (type) {
    case 'transaction':
      const { ethAddress, ethAmount } = payload
      return {
        nonce: nonce,
        gasLimit: 21000,
        gasPrice: utils.bigNumberify("20000000000"),
      
        to: ethAddress,
      
        value: utils.parseEther(ethAmount),
        data: "0x",
      
        // This ensures the transaction cannot be replayed on different networks
        chainId: providers.networks[network].chainId
      
      };
      break;
    case 'contract':
      
      break;
  
    default:
      break;
  }
}

/**
 * Sign Etheruem Transactions 
 * @method walletSign
 * @param {objet} payload 
 * @param {objet} payload
 */
export function * walletSign ({payload, metadata}) {
  try {
    
    // Get Current Nonce
    const transaction = yield transactionGenerate(payload, metadata, wallet);
    const signedTransaction = yield wallet.sign(transaction);
    const hash = yield provider.sendTransaction(signedTransaction);
    
    yield put(actions.walletSign("SUCCESS")(
      {},
      metadata,
    ))
  } catch (err) {
    yield put(actions.walletSign("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * walletSignMessage ({payload, metadata}) {
  try {

    yield put(actions.walletSignMessage("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.walletSignMessage("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * walletGenerateRandom ({payload, metadata}) {
  try {
    const { extraEntropy } = metadata;
    const walletRandom = Wallet.createRandom(extraEntropy);
    yield put(actions.walletGenerateRandom("SUCCESS")(
      walletRandom,
      metadata,
    ))
  } catch (err) {
    yield put(actions.walletGenerateRandom("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * walletGenerateJson ({payload, metadata}) {
  try {
    const { json, password } = payload
    yield Wallet.fromEncryptedWallet(json, password)
    yield put(actions.walletGenerateJson("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.walletGenerateJson("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * walletGenerateMenomonic ({payload, metadata}) {
  try {
    const mnemonic = payload
    const walletMnemonic = Wallet.fromMnemonic(mnemonic);
    yield put(actions.walletGenerateMenomonic("SUCCESS")(
      walletMnemonic,
      metadata,
    ))
  } catch (err) {
    yield put(actions.walletGenerateMenomonic("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * walletGenerateBrain ({payload, metadata}) {
  try {
    const { username, password } = payload
    const walletBrain = yield Wallet.fromBrainWallet(username, password)
    yield put(actions.walletGenerateBrain("SUCCESS")(
      walletBrain,
      metadata,
    ))
  } catch (err) {
    yield put(actions.walletGenerateBrain("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}