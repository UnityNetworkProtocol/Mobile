/* --- Global Modules --- */
import idx from "idx";
import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions'
import ethers from 'ethers'
import { networkRouting } from "./helpers"

// Initialize
const providers = ethers.providers;

export function * ensResolveName ({payload, metadata}) {
  try {
    const { network } = metadata
    const provider = networkRouting(network)
    const address = yield provider.resolveName(payload);
    yield put(actions.ensResolveName("SUCCESS")(
      address,
      metadata,
    ))
  } catch (err) {
    console.log(err)
    yield put(actions.ensResolveName("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * ensLookupAddress ({payload, metadata}) {
  try {

    yield put(actions.ensLookupAddress("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.ensLookupAddress("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}
