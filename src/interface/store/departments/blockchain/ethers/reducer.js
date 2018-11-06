import { initialState } from './selectors'
import actions from './actions'
  
export default (state = initialState, {type, payload, metadata, batch, entity} ) => {
  if (!!(metadata && metadata.delta) && entity === 'ethers') {
    const status = {
      REQUESTED: undefined,
      SUCCESS: true,
      FAILURE: false
    }[batch]
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: status,
        data: payload,
        meta: metadata,
        input: !status ? payload : state[metadata.delta].input,
        output: status ? payload : null
      }
    }
  } else {
    switch (type) {
      case actions.PROVIDER_CHANGE:
        return {
          ...state,
          provider: payload
        }
      case actions.CHAIN_CHANGE:
        return {
          ...state,
          chain: payload
        }
      case actions.JSONRPC_URL_CHANGE:
        return {
          ...state,
          url: payload
        }
      default:
        return state
    }
  }
}
  