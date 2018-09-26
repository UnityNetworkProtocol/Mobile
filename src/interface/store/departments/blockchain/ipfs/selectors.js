export const initialState = {};

const getTree = (state) => state || null
const getDelta = (state,delta) => state[delta] || null
const getDeltaData = (state,delta) => state[delta] && state[delta].data || null
const getDeltaStatus = (state,delta) => state[delta] && state[delta].status || null

export default {
  getTree,
  getDelta,
  getDeltaData,
  getDeltaStatus
}