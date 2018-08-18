import { put, takeEvery } from 'redux-saga/effects';
import actions from './actions'

export function * keySave ({payload, metadata}) {
  try {

    yield put(actions.keySave("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.keySave("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * keyLoad ({payload, metadata}) {
  try {

    yield put(actions.keyLoad("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.keyLoad("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

export function * keyReset ({payload, metadata}) {
  try {

    yield put(actions.keyReset("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.keyReset("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}


export default function* keychainSaga() {
  yield [
    takeEvery(actions.KEY_SAVE.REQUEST, keySave),
    takeEvery(actions.KEY_LOAD.REQUEST, keyLoad),
    takeEvery(actions.KEY_RESET.REQUEST, keyReset),
  ];
}