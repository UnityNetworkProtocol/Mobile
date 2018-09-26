import { initialState } from "./selectors";
import actions from "./actions";

export default (state = initialState, {type, payload, metadata, batch, entity} ) => {
  if (!!(metadata && metadata.delta) && entity === "accounts") {
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: {
          REQUESTED: undefined,
          SUCCESS: true,
          FAILURE: false
        }[batch],
        data: payload
      }
    }
  } else {
    switch (type) {
      case "WALLET_NONCE_UPDATE_REQUEST":
        return {
          ...state,
          [metadata.address]: {
            ...state[metadata.address],
            nonce: payload
          }
        }
      default:
        return state;
    }
  }
};
