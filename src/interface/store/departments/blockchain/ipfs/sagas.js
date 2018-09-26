/* --- Global Modules --- */
import { takeEvery } from 'redux-saga/effects';

/* --- Local Modules --- */
import actions from './actions';

/* ------------------------- Sagas List -------------------------- */
// import {
//   filesAdd,
//   filesGet,
//   filesCreateStream,
//   filesCat
// } from './sagasFiles';

import {
  pubsubSubscribe,
  pubsubUnsubscibe,
  pubsubPublish,
  pubsubLs,
  pubsubPeers
} from './sagasPubSub';

export default function* ipfsSaga() {
  yield [
    // Files
    // takeEvery(actions.FILES_ADD.REQUEST, filesAdd),
    // takeEvery(actions.FILES_GET.REQUEST, filesGet),
    // takeEvery(actions.FILES_CREATE_STREAM.REQUEST, filesCreateStream),
    // takeEvery(actions.FILES_CAT.REQUEST, filesCat),

    // PubSub
    takeEvery(actions.PUBSUB_SUBSCRIBE.REQUEST, pubsubSubscribe),
    takeEvery(actions.PUBSUB_UNSUBSCIBE.REQUEST, pubsubUnsubscibe),
    takeEvery(actions.PUBSUB_PUBLISH.REQUEST, pubsubPublish),
    takeEvery(actions.PUBSUB_LS.REQUEST, pubsubLs),
    takeEvery(actions.PUBSUB_PEERS.REQUEST, pubsubPeers),

    // takeEvery(actions.BLOCKS_ADD.REQUEST, blocksAdd),
    // takeEvery(actions.BLOCKS_GET.REQUEST, blocksGet),
    // takeEvery(actions.BLOCKS_CREATE_STREAM.REQUEST, blocksCreateStream),
    // takeEvery(actions.BLOCKS_CAT.REQUEST, blocksCat),
    // takeEvery(actions.DAG_PUT.REQUEST, dagPut),
    // takeEvery(actions.DAG_GET.REQUEST, dagGet),
    // takeEvery(actions.DAG_TREE.REQUEST, dagTree),
    // takeEvery(actions.OBJECT_NEW.REQUEST, objectNew),
    // takeEvery(actions.OBJECT_PUT.REQUEST, objectPut),
    // takeEvery(actions.OBJECT_GET.REQUEST, objectGet),
    // takeEvery(actions.OBJECT_DATA.REQUEST, objectData),
    // takeEvery(actions.OBJECT_LINKS.REQUEST, objectLinks),
    // takeEvery(actions.OBJECT_STAT.REQUEST, objectStat),
  ];
}