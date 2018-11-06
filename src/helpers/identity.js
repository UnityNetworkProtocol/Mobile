import { verifyJWT } from 'did-jwt';

export const verify = data => verifyJWT(data);

export default {
  verify
}