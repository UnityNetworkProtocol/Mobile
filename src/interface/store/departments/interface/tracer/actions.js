import {createRequestTypes, action} from "store/departments/utils";
const entity = 'tracer';
export const actions = {
  TRACER_WALLET_ACTIVE: createRequestTypes('TRACER_WALLET_ACTIVE'),
  tracerWalletActive: status => (payload, metadata) => action(actions.TRACER_WALLET_ACTIVE[status], payload, metadata, status, entity),
}
export default actions;
