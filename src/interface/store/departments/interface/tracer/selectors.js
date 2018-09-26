export const initialState = {
  activeAccount: "0xC78Ba87a035126d40bFF69D731B2e4390fd9F36f",
};

const getTree = (state) => state || null
const getDelta = (state,delta) =>state[delta] || null
const getDeltaData = (state,delta) => (state[delta] && state[delta].data) || null
const getDeltaStatus = (state,delta) => (state[delta] && state[delta].status) || null

export default {
  getTree,
  getDelta,
  getDeltaData,
  getDeltaStatus
}