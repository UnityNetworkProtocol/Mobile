/* --- Global Modules --- */
import { put } from 'redux-saga/effects';
// const IPFS = require('ipfs');
// const Room = require('ipfs-pubsub-room')
/* --- Local Modules Modules --- */
import actions from './actions';
// const ipfs = new IPFS({
//   EXPERIMENTAL: {
//     pubsub: true
//   },
//   config: {
//     Addresses: {
//       Swarm: [
//         '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
//       ]
//     }
//   }
// })



// console.log(ipfs)

// ipfs.on('ready', () => {
//   const room = Room(ipfs, 'room-name')

//   room.on('peer joined', (peer) => {
//     console.log('Peer joined the room', peer)
//   })

//   room.on('peer left', (peer) => {
//     console.log('Peer left...', peer)
//   })

//   // now started to listen to room
//   room.on('subscribed', () => {
//     console.log('Now connected!')
//   })
// })
/**
 * Subscribe to IPFS PubSub
 * 
 * @method pubsubSubscribe
 * @param {Object} payload 
 * @param {Object} metadata 
 */
export function * pubsubSubscribe ({payload, metadata}) {
try {

  console.log("PubSub Subscribe")
  const subscription = ipfs.pubsub.subscribe('demo');
  console.log(subscription);

  yield put(actions.pubsubSubscribe("SUCCESS")(
    payload,
    metadata,
  ));
} catch (err) {
  yield put(actions.pubsubSubscribe("FAILURE")(
    {
      error: err.message,
    },
    metadata,
  ));
}
}

 /**
 * Unsubscribe to IPFS PubSub
 * 
 * @method pubsubUnsubscribe
 * @param {Object} payload 
 * @param {Object} metadata 
 */
export function * pubsubUnsubscibe ({payload, metadata}) {
try {

  yield put(actions.pubsubUnsubscibe("SUCCESS")(
    payload,
    metadata,
  ));
} catch (err) {
  yield put(actions.pubsubUnsubscibe("FAILURE")(
    {
      error: err.message,
    },
    metadata,
  ));
}
}

 
export function * pubsubPublish ({payload, metadata}) {
try {

  yield put(actions.pubsubPublish("SUCCESS")(
    payload,
    metadata,
  ))
} catch (err) {
  yield put(actions.pubsubPublish("FAILURE")(
    {
      error: err.message,
    },
    metadata,
  ))
}
}

 
export function * pubsubLs ({payload, metadata}) {
try {

  yield put(actions.pubsubLs("SUCCESS")(
    payload,
    metadata,
  ))
} catch (err) {
  yield put(actions.pubsubLs("FAILURE")(
    {
      error: err.message,
    },
    metadata,
  ))
}
}

 
export function * pubsubPeers ({payload, metadata}) {
try {

  yield put(actions.pubsubPeers("SUCCESS")(
    payload,
    metadata,
  ))
} catch (err) {
  yield put(actions.pubsubPeers("FAILURE")(
    {
      error: err.message,
    },
    metadata,
  ))
}
}