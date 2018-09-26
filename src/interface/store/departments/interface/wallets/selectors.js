import avatarDemo from "assets/images/avatarDemo.jpg";

export const initialState = {
  "0xC78Ba87a035126d40bFF69D731B2e4390fd9F36f": {
    address: "0xC78Ba87a035126d40bFF69D731B2e4390fd9F36f",
    addressEns: "kames.unity.eth",
    avatar: avatarDemo,
    balanceEth: 7,
    balanceTokens: 4,
    nonce: 35,
    transactionCount: 35,
    walletName: "ShadowKnight"
  },
  "0xbE335c3D8614a863A550966372c865E079CcA4E8": {
    address: "0xbE335c3D8614a863A550966372c865E079CcA4E8",
    addressEns: "BuidlGuidl.unity.eth",
    avatar: avatarDemo,
    balanceEth: 42,
    balanceTokens: 13,
    nonce: 11,
    transactionCount: 11,
    walletName: "BuidlGuidl"
  }
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