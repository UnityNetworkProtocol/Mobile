import idx from "idx";
import ethers from "ethers";
// Initialize
const providers = ethers.providers;

/**
 * Dynamically interact with different network providers during blockchain dispatch requests.
 * 
 * @method networkRouting
 * @param {Object} network 
 * @return {Object}
 */
export const networkRouting = network => {
  switch (idx(network, _=>_.provider)) {
    case 'json':
      return window.ethereum.providers.json;
    case 'test':
      return window.ethereum.providers.test;
    case 'infura':
      return window.ethereum.providers.infura;
    case 'metamask':
      return new ethers.providers.Web3Provider(window.web3.currentProvider); // Use Mist/MetaMask's provider
    default:
      return providers.getDefaultProvider('rinkeby');
  }
}

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
export const isAddress =  address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      // check if it has the basic requirements of an address
      return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
      // If it's all small caps or all all caps, return true
      return true;
  } else {
      /* TODO: SHAD ADDRESS
        We should also SHA the addresses, but the sha_512 is not the correct one.
        And, I can't find the correct implmementation online. So if it fits, we ships! - @kamescg  */
      // return isChecksumAddress(address);
      return true
  }
};