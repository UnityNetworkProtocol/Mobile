/* --- Global Modules --- */
import { combineReducers } from "redux";

/* --- Local Modules --- */
import ethersReducer from "./blockchain/ethers/reducer";

/* --- Root Reducer --- */
export default combineReducers({
  ethers: ethersReducer,
});

