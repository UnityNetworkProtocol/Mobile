/* --- Global Modules --- */
import { put } from 'redux-saga/effects';

/* --- Local Modules Modules --- */
import actions from './actions';


export function * objectNew ({payload, metadata}) {
  try {

    yield put(actions.objectNew("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectNew("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectPut ({payload, metadata}) {
  try {

    yield put(actions.objectPut("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectPut("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectGet ({payload, metadata}) {
  try {

    yield put(actions.objectGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectData ({payload, metadata}) {
  try {

    yield put(actions.objectData("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectData("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectLinks ({payload, metadata}) {
  try {

    yield put(actions.objectLinks("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectLinks("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * objectStat ({payload, metadata}) {
  try {

    yield put(actions.objectStat("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.objectStat("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}