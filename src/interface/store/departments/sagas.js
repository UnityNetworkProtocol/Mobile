/* --- Global Modules --- */
import { all } from "redux-saga/effects";

/* --- Local Modules --- */
// Backend
import keychain from "./backend/keychain/sagas";

// Decentralized
import ethers from "./blockchain/ethers/sagas";
import ipfs from "./blockchain/ipfs/sagas";

// Interface
import accounts from "./interface/accounts/sagas";

/* --- Export Root Saga --- */
export default function* rootSaga() {
  yield all([
    // Backend
    keychain(),
    // Decentralized
    ethers(),
    ipfs(),

    // Interface
    accounts(),
    
    // Backend
  ]);
}