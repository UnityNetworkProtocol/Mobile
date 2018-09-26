/* --- Global Modules --- */
// import upperFirst from 'lodash/upperFirst'
import forIn from "lodash/forIn";
/* --- Local Modules --- */

// Decentralized
import ethersSelectors from "./blockchain/ethers/selectors";
import ipfsSelectors from "./blockchain/ipfs/selectors";

// Interface
import deployedSelectors from "./interface/deployed/selectors";
import identitySelectors from "./interface/identity/selectors";
import tracerSelectors from "./interface/tracer/selectors";
import walletSelectors from "./interface/wallets/selectors";

// Branch Selector
const getBranch = (state = {}, storeName) => state[storeName] || {};

// Parent Object
module.exports.fromEthers = {};
module.exports.fromIpfs = {};

module.exports.fromDeployed = {};
module.exports.fromIdentity = {};
module.exports.fromTracer = {};
module.exports.fromWallets = {};

// Ethers Branch
forIn(ethersSelectors, (selector, name) => {
  if (typeof selector === "function") {
    module.exports.fromEthers[name] = (state, ...args) => selector(getBranch(state, "ethers"), ...args);
  }
});

// IPFS Branch
forIn(ipfsSelectors, (selector, name) => {
  if (typeof selector === "function") {
    module.exports.fromIpfs[name] = (state, ...args) => selector(getBranch(state, "ipfs"), ...args);
  }
});


/* ----------------------------------- */

// Identity Branch
forIn(deployedSelectors, (selector, name) => {
  if (typeof selector === "function") {
    module.exports.fromDeployed[name] = (state, ...args) => selector(getBranch(state, "deployed"), ...args);
  }
});

// Identity Branch
forIn(identitySelectors, (selector, name) => {
  if (typeof selector === "function") {
    module.exports.fromIdentity[name] = (state, ...args) => selector(getBranch(state, "identity"), ...args);
  }
});

// Tracer Branch
forIn(tracerSelectors, (selector, name) => {
  if (typeof selector === "function") {
    module.exports.fromTracer[name] = (state, ...args) => selector(getBranch(state, "tracer"), ...args);
  }
});

// Wallet Branch
forIn(walletSelectors, (selector, name) => {
  if (typeof selector === "function") {
    module.exports.fromWallets[name] = (state, ...args) => selector(getBranch(state, "wallets"), ...args);
  }
});
