/* --- Global Modules --- */
import { all } from "redux-saga/effects";

/* --- Local Modules --- */
import ethers from "./blockchain/ethers/sagas";

/* --- Export Root Saga --- */
export default function* rootSaga() {
  yield all([
    ethers()
  ]);
}