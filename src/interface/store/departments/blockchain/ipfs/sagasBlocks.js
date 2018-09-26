/* --- Global Modules --- */
import { put } from 'redux-saga/effects';

/* --- Local Modules Modules --- */
import actions from './actions';

export function * blocksAdd ({payload, metadata}) {
  try {

    yield put(actions.blocksAdd("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksAdd("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * blocksGet ({payload, metadata}) {
  try {

    yield put(actions.blocksGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * blocksCreateStream ({payload, metadata}) {
  try {

    yield put(actions.blocksCreateStream("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksCreateStream("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * blocksCat ({payload, metadata}) {
  try {

    yield put(actions.blocksCat("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.blocksCat("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}