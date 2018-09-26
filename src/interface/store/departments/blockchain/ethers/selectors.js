import idx from 'idx'
export const initialState = {
  provider: 'infura',
  chain: 'rinkeby'
}

const getProvider = (state) =>state.provider
const getTree = (state) => state || null
const getDelta = (state,delta) =>state[delta] || null
const getDeltaData = (state,delta) => (state[delta] && state[delta].data) || null
const getDeltaStatus = (state,delta) => (state[delta] && state[delta].status) || null
const getFilter = (state, key, value) => Object.keys(state).filter(item => idx(state, _=> _[item].data[key] ) === value ? 1 : 0)
const getStarting = (state, starts) => Object.keys(state).filter(item => item.startsWith(starts)).map(filteredItem=> state[filteredItem])
const getStartingData = (state, starts) => Object.keys(state).filter(item => item.startsWith(starts)).map(filteredItem=> state[filteredItem].data)
const getBlockScan = (state) => Object.keys(state).filter(item => item.startsWith('block|scan')).map(filteredItem=> state[filteredItem])

export default {
  getTree,
  getDelta,
  getDeltaData,
  getDeltaStatus
}