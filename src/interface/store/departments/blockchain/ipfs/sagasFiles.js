/* --- Global Modules --- */
import { put } from 'redux-saga/effects';

/* --- Local Modules Modules --- */
import actions from './actions';
import ipfs from './ipfs';
import {
  ImageConvertToBuffer,
  FileConvertToJSON
} from './helpers';

/* --- Constants --- */
// var Buffer = require('buffer').Buffer;

/**
 * File Add
 * @desc Upload files to IPFS servers
 * @param {object} payload
 * @param {object} metadata
 */
export function * filesAdd ({payload, metadata}) {
  try {
    switch (metadata.type) {
      case 'image':
        const buffer = ImageConvertToBuffer(payload.preview);
        const data = yield ipfs.add(buffer)
        yield put(actions.filesAdd("SUCCESS")(data,metadata));
        break;
      case 'json':
          /**
           * Assume the default type is an object. 
           * Developers can define inputType in MetaData.
           * TODO (@kamescg) Automate type checking.
           */
          if(metadata.inputType === 'string') payload = JSON.parse(payload);
          if(metadata.inputType === 'file') payload = FileConvertToJSON(payload);
          // const bufferJSON = Buffer.from(JSON.stringify(payload))
          // const dataJSONHash = yield ipfs.add(bufferJSON)
          // yield put(actions.filesAdd("SUCCESS")(dataJSONHash,metadata))
        break;
      case 'video':

        break;
      case 'pdf':
        break;
      default:
        break;
    }

    
  } catch (err) {
    console.log(err)
    yield put(actions.filesAdd("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}



 
/**
 * File Add
 * @desc Upload files to IPFS servers
 * @param {object} payload
 * @param {object} metadata
 */
export function * filesGet ({payload, metadata}) {
  try {

    yield put(actions.filesGet("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesGet("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * filesCreateStream ({payload, metadata}) {
  try {

    yield put(actions.filesCreateStream("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesCreateStream("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

 
export function * filesCat ({payload, metadata}) {
  try {

    yield put(actions.filesCat("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.filesCat("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}