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

/**
 * Wrapper for the ethers.provider.getTransactionCount method
 * @method transactionsBatchProcess
 * @param {Object} payload 
 * @param {Object} metadata 
 * 
 * @desc @kamescg I originally wrote this method to do tricky batch processing 
 * requests when scanning the ENS address as an experiment. Need to extract code
 * from the BuidlBox repo project.
 */
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
  
    yield put(actions.transactionBatchProcess(SUCCESS)(
      results,
      metadata,
    ))
  } catch (err) {
    yield put(actions.transactionBatchProcess(FAILURE)(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}