/* --- Global Modules --- */
import idx from 'idx';
import { put } from 'redux-saga/effects';
import actions from './actions'
import ethers from 'ethers'
import { networkRouting } from "./helpers"


/* --- Blockchain Sagas --- */
export function * blockchainBlockNumber ({payload, metadata}) {
  try {
    const { network } = metadata
    const provider = networkRouting(network)
    const latestBlockNumber =  yield provider.getBlockNumber()
    yield put(actions.blockchainBlockNumber("SUCCESS")(
      latestBlockNumber,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blockchainBlockNumber("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * blockchainGasPrice ({payload, metadata}) {
  try {
    const { network } = metadata
    const provider = networkRouting(network)
    const gasPrice = yield provider.getGasPrice()
    yield put(actions.blockchainGasPrice("SUCCESS")(
      gasPrice.toString(),
      metadata,
    ))
  } catch (err) {
    yield put(actions.blockchainGasPrice("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * blockchainBlock ({payload, metadata}) {
  try {
    const { network } = metadata
    const blockNumber = payload
    const provider = networkRouting(network)
    const blockInfo = yield provider.getBlock(blockNumber)
    yield put(actions.blockchainBlock("SUCCESS")(
      // EthersBlockFlowIn(blockInfo),
      blockInfo,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blockchainBlock("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * blockchainTransaction ({payload, metadata}) {
  try {
    const { network } = metadata;
    const provider = networkRouting(network)
    const transaction = yield provider.getTransaction(payload)
    yield put(actions.blockchainTransaction("SUCCESS")(
      transaction,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blockchainTransaction("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * blockchainTransactionReceipt ({payload, metadata}) {
  try {
      const { network } = metadata;
      const provider = networkRouting(network);
      const transactionReceipt = yield provider.getTransactionReceipt(payload);
    yield put(actions.blockchainTransactionReceipt("SUCCESS")(
      transactionReceipt,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blockchainTransactionReceipt("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}