/* --- Global Modules --- */
import { combineReducers } from "redux";

/* --- Local Modules --- */
// Backend
import keychainReducer from "./backend/keychain/reducer";

// Blockchain
import ethersReducer from "./blockchain/ethers/reducer";
import ipfsReducer from "./blockchain/ipfs/reducer";

// Interface
import accountsReducer from "./interface/accounts/reducer";
import contactsReducer from "./interface/contacts/reducer";
import deployedReducer from "./interface/deployed/reducer";
import settingsReducer from "./interface/settings/reducer";
import tracerReducer from "./interface/tracer/reducer";
import transactionsReducer from "./interface/transactions/reducer";
import walletsReducer from "./interface/wallets/reducer";

/* --- Root Reducer --- */
export default combineReducers({
  // Backend
  keychain: keychainReducer,

  // Interface
  accounts: accountsReducer,
  contacts: contactsReducer,
  deployed: deployedReducer,
  settings: settingsReducer,
  tracer: tracerReducer,
  transactions: transactionsReducer,
  wallets: walletsReducer,

  // Decenralized
  ethers: ethersReducer,
  ipfs: ipfsReducer,
});

