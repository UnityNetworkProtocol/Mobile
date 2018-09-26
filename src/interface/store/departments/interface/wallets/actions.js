import {createRequestTypes, action} from "store/departments/utils";
const entity = 'wallet';

export const actions = {
  WALLET_NONCE_UPDATE: createRequestTypes('WALLET_NONCE_UPDATE'),
  walletNonceUpdate: status => (payload, metadata) => action(actions.WALLET_NONCE_UPDATE[status], payload, metadata, status, entity),
};

export default actions;
