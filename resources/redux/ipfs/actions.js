/* ------------------------- ENTITY -------------------------- */
const entity = 'ipfs'
const entityUppercase = 'IPFS'

const entityTypes = [
  'files',
  'blocks',
  'dag',
  'pubsub',
  'object',
]
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

console.log(`import {createRequestTypes, action} from '../utils'
export const actions = {`)
entityTypes.map(type=>{
const actionsRendered = actions[type].map(entityActions=> {
  return (
`${type.toUpperCase()}_${entityActions.toUpperCase()}: createRequestTypes('${type.toUpperCase()}_${entityActions.toUpperCase()}'),
`
  )

})
console.log(...actionsRendered)
})

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
  return (
`${type}${functionHeader}: status => (payload, metadata) => action(actions.${type.toUpperCase()}_${entityActions.toUpperCase()}[status], payload, metadata, true),
`
  )

})
console.log(...actionsRendered)
})
console.log(`}
export default actions
`)
