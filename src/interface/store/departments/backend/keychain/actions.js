/* --- Local Modules --- */
import {createRequestTypes, action} from "../../utils";

const actions = {
  KEY_CREATE: createRequestTypes("KEY_CREATE"),
  KEY_SAVE: createRequestTypes("KEY_SAVE"),
  KEY_LOAD: createRequestTypes("KEY_LOAD"),
  KEY_RESET: createRequestTypes("KEY_RESET"),

  keyCreate: status => (payload, metadata) => action(actions.KEY_CREATE[status], payload, metadata, true),
  keySave: status => (payload, metadata) => action(actions.KEY_SAVE[status], payload, metadata, true),
  keyLoad: status => (payload, metadata) => action(actions.KEY_LOAD[status], payload, metadata, true),
  keyReset: status => (payload, metadata) => action(actions.KEY_RESET[status], payload, metadata, true),
};

export default actions;
