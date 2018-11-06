/* ------------------------- External Dependencies -------------------------- */
import { put } from 'redux-saga/effects';
import actions from './actions'
import ethers from 'ethers'
import { networkRouting, isAddress } from "./helpers";
// Initialize
const providers = ethers.providers;

import { REQUEST, SUCCESS, FAILURE } from "interface/store/departments/utils";
/**
 * IMPORT the wallets actions so we can update the wallet state
 * when making requests to the blockchain.
 * 
 * 1) accountTransactionCount => walletNonceUpdate | update wallets nonce
 */
import wallets from "interface/store/departments/interface/wallets/actions";

/**
 * Wrapper for the ethers.provider.accountHistory Etherscan specific API method
 * @method accountHistory
 * @param {Object} payload 
 * @param {Object} metadata 
 */
export function * accountHistory ({payload, metadata}) {
  try {
    const { ethAddress, blockStart, blockEnd } = payload;
    const provider = new providers.EtherscanProvider('rinkeby');
    var endBlock = 3038013;
    const history = yield provider.getHistory(ethAddress, blockStart || 0, endBlock);
    console.log(history)
    yield put(actions.accountBalance(SUCCESS)(
      history,
      metadata,
    ))
  } catch (err) {
    yield put(actions.accountBalance(FAILURE)(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

/**
 * Wrapper for the ethers.provider.gerBalance method
 * @method accountBalance
 * @param {Object} payload 
 * @param {Object} metadata 
 */
 export function * accountBalance ({payload, metadata}) {
  try {
    const provider = networkRouting(metadata.network);
    const balance = yield provider.getBalance(payload);
    const balanceFormatted = ethers.utils.formatEther(balance);
    yield put(actions.accountBalance(SUCCESS)(
      balanceFormatted,
      metadata,
    ))
  } catch (err) {
    yield put(actions.accountBalance(FAILURE)(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

/**
 * Wrapper for the ethers.provider.getTransactionCount method
 * @method accountTransactionCount
 * @param {Object} payload 
 * @param {Object} metadata 
 */
export function * accountTransactionCount ({payload, metadata}) {
  try {
    const provider = networkRouting(metadata.network);
    const transactionCount = yield provider.getTransactionCount(payload);

    // UPDATE the interface/wallet store with the latest NONCE
    yield put(wallets.walletNonceUpdate(REQUEST)(transactionCount,{address: payload}))

    yield put(actions.accountTransactionCount(SUCCESS)(
      transactionCount,
      metadata,
    ))
  } catch (err) {
    if(process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
    yield put(actions.accountTransactionCount(FAILURE)(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}