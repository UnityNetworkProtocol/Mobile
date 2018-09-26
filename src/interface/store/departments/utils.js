export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function createRequestTypes (base) {
  const res = {};
  const types = [REQUEST, SUCCESS, FAILURE];
  types.forEach((type) => {
    res[type] = `${base}_${type}`;
  });

  return res;
}

export function action (type, payload = {}, metadata = {}, batch, entity) {
  return {
    type,
    payload,
    metadata,
    batch,
    entity,
  }
}
