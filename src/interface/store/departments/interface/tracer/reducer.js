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
      case "TRACER_WALLET_ACTIVE_REQUEST":
        return {
          ...state,
          "activeAccount": payload
        }
      default:
        return state;
    }
  }
};
