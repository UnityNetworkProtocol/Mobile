/* --- Global Modules --- */
import { put } from 'redux-saga/effects';

/* --- Local Modules Modules --- */
import actions from './actions';

export function * dagPut ({payload, metadata}) {
  try {

    yield put(actions.dagPut("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.dagPut("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * dagGet ({payload, metadata}) {
  try {

    yield put(actions.dagGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.dagGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * dagTree ({payload, metadata}) {
  try {

    yield put(actions.dagTree("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.dagTree("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}