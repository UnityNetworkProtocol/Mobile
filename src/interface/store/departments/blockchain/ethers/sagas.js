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

import { REQUEST, SUCCESS, FAILURE } from "interface/store/departments/utils";

import {
  accountHistory,
  accountBalance,
  accountTransactionCount
} from "./sagasAccounts.js";

import {
  blockchainBlock,
  blockchainBlockNumber,
  blockchainGasPrice,
  blockchainTransaction,
  blockchainTransactionReceipt,
} from "./sagasBlockchain.js";
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

import {
  transactionsBatchProcess
} from "./sagasHelpers.js"

/* ------------------------- Internal Dependencies -------------------------- */
/**
 * Wrapper for the ethers.provider.accountHistory Etherscan specific API method
 * @method providerInfura
 * @param {Object} payload 
 * @param {Object} metadata 
 * 
 * @todo @kamescg I don't like how the network is passed in the payload...
 * Everywhere else we pass in via the metadata object.
 */
export function * providerInfura ({payload, metadata}) {
  try {
    const { network } = payload
    const infuraProvider = new providers.InfuraProvider(network.chain || 'homestead');
    window.ethereum.providers.infura = infuraProvider
    yield put(actions.providerInfura(SUCCESS)(
      payload,
      metadata,
    ))
  } catch (err) {
    if (process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
    yield put(actions.providerInfura(FAILURE)(
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

    takeEvery(actions.WALLET_GENERATE_RANDOM.REQUEST, walletGenerateRandom),
    takeEvery(actions.WALLET_GENERATE_JSON.REQUEST, walletGenerateJson),
    takeEvery(actions.WALLET_GENERATE_MENOMONIC.REQUEST, walletGenerateMenomonic),
    takeEvery(actions.WALLET_GENERATE_BRAIN.REQUEST, walletGenerateBrain),
    // takeEvery(actions.WALLET_ADDRESS.REQUEST, walletAddress),
    // takeEvery(actions.WALLET_ENCRYPT.REQUEST, walletEncrypt),

    takeEvery(actions.BLOCKCHAIN_BLOCK_NUMBER.REQUEST, blockchainBlockNumber),
    takeEvery(actions.BLOCKCHAIN_GAS_PRICE.REQUEST, blockchainGasPrice),
    takeEvery(actions.BLOCKCHAIN_BLOCK.REQUEST, blockchainBlock),
    takeEvery(actions.BLOCKCHAIN_TRANSACTION.REQUEST, blockchainTransaction),
    takeEvery(actions.BLOCKCHAIN_TRANSACTION_RECEIPT.REQUEST, blockchainTransactionReceipt),

    takeEvery(actions.ENS_RESOLVE_NAME.REQUEST, ensResolveName),
    takeEvery(actions.ENS_LOOKUPADDRESS.REQUEST, ensLookupAddress),

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