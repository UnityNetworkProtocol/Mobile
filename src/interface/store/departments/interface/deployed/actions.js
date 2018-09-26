import {createRequestTypes, action} from "store/departments/utils";
const entity = 'deployed';

export const actions = {
  DEPLOYED_CONTRACT: createRequestTypes('DEPLOYED_CONTRACT'),
  deployedContract: status => (payload, metadata) => action(actions.DEPLOYED_CONTRACT[status], payload, metadata, status, entity),
};

export default actions;
