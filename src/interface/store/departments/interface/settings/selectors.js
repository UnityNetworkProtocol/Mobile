export const initialState = {
  0: {
    address: "0xkames....geraghty",
    addressEns: "kames.unity.eth",
    ethBalance: 45,
  }
};

export const getDelta = (state,delta) =>state[delta] || null
export const getDeltaData = (state,delta) => (state[delta] && state[delta].data) || null
export const getDeltaStatus = (state,delta) => (state[delta] && state[delta].status) || null