/* --- Global Modules --- */
import IPFS from 'ipfs-api';

/* --- Initialize --- */
export default new IPFS('ipfs.infura.io', '5001', {protocol: 'https' });
