import {createRequestTypes, action} from "store/departments/utils";
const entity = 'accounts'
export const actions = {
  WALLET_GENERATE_RANDOM: createRequestTypes('WALLET_GENERATE_RANDOM'),
  walletGenerateRandom: status => (payload, metadata) => action(actions.WALLET_GENERATE_RANDOM[status], payload, metadata, status, entity),
}
export default actions;
