/* ------------------------- ENTITY -------------------------- */
const entity = 'ipfs';
const entityUppercase = 'IPFS';

const entityTypes = [
  'files',
  'blocks',
  'dag',
  'pubsub',
  'object',
];

const actions = {
  files: [
    'add',
    'get',
    'create_stream',
    'cat',
  ],
  blocks: [
    'add',
    'get',
    'create_stream',
    'cat',
  ],
  dag: [
    'put',
    'get',
    'tree'
  ],
  object: [
    'new',
    'put',
    'get',
    'data',
    'links',
    'stat',
  ],
  pubsub: [
    'subscribe',
    'unsubscibe',
    'publish',
    'ls',
    'peers'
  ],
  swarm: [
    'addrs',
    'connect',
    'disconnect',
    'peers',
  ]
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(`
import actions from ./actions
import { initialState } from './selectors'
export default (state = initialState, {type, payload, metadata}) => {
if(batch) {
  return {
    ...state,
    [metadata.delta]: {
      ...state[metadata.delta],
      status: undefined
    }
  }
}else{ 
switch (type) {
`)
entityTypes.map(type=>{
const actionsRendered = actions[type].map(entityActions=> {

  let functionHeader = entityActions[0].toUpperCase() 
  const split = entityActions.slice(1).split("_")
  if (split[1]) {
    const split = entityActions.slice(1).split("_")
    functionHeader = functionHeader + split[0] +  capitalizeFirstLetter(split[1])
  } else {
    functionHeader = functionHeader + entityActions.slice(1)
  }


  const reduce = `
    case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.REQUEST:
      return {
        ...state,
        [metadata.delta]: {
          ...state[metadata.delta],
          status: undefined
        }
      }
    case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.SUCCESS:
      return {
        ...state,
        [metadata.delta]: {
          ...state[metadata.delta],
          status: true,
          data: payload
        }
      }
    case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.FAILURE:
      return {
        ...state,
        [metadata.delta]: {
          ...state[metadata.delta],
          status: false,
          error: payload
        }
      }
`
console.log(reduce)
})
})
console.log(`
  default:
    return state
}
}
}
`)