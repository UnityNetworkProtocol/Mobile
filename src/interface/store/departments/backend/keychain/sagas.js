import KeyStorage from 'react-native-sensitive-info';
import LocalAuth from 'react-native-local-auth';


import { put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

export function * keySave ({payload, metadata}) {
  try {

    const { keyPublic, keyPrivate } = payload;
      
    const auth = yield LocalAuth.authenticate({
      reason: 'Authentication',
      falbackToPasscode: true,    // fallback to passcode on cancel
      suppressEnterPassword: false // disallow Enter Password fallback
    })

    const keyStorage = yield KeyStorage.setItem('key2', 'value2', {
      showModal: true,
      sharedPreferencesName: 'unity',
      encrypt: true
    });

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