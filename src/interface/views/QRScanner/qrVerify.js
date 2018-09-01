import RNWalletConnect from "rn-walletconnect-wallet";
import { WalletConnector } from 'walletconnect';
import parseJson from "parse-json";
import isJson from "is-json";
import {
  Linking,
} from 'react-native';

import validate from "validate.js";

/* --- Module --- */
export default (e) => {
  try {
    const is = isJson(e.data);
    switch (is) {
      case true:
        console.log("QR Code Object");
        const data = parseJson(e.data);
        const parsed = qrObjectParse(data);
        isWalletConnect(parsed);
        break;
      case false:
          console.log("QR Code String");
          isValidUrl(data);
        break;
      case "array":

        break;

      case "undefined":

          break;
    
      default:
        break;
    }

    if (isValidUrl(e.data)) {
      Linking
        .openURL(e.data)
        .catch(err => console.error('An error has occured', err));
    };

  } catch(err) {
    console.log(err)
  }


};



const isValidUrl = (string) => {
  const valid = validate({website: string}, {website: {url: true}});
  console.log(!valid);
  return !valid;
};

const validateUrl = (s) => {

  return s;
}

/**
 * QR Object Parse
 * @param {object}
 */
const qrObjectParse = (o) => {

  return o;
}


const isWalletConnect = (o) => {
  const { sessionId, sharedKey } = o;
  console.log(o);
  const walletConnector = new RNWalletConnect(
    {
      bridgeUrl: "https://bridge.walletconnect.org", 
      sessionId: sessionId,
      sharedKey: sharedKey,
      dappName: "Unity"
    }
  );

  try {
    walletConnector.sendSessionStatus({
      fcmToken: false,
      pushEndpoint: "https://push.walletconnect.org/notification/new",
      data: {
        accounts: [
          '0x0000000000000000000000000000000000000000'
        ]
      }
    })
  } catch(err) {
    console.log(err)
  }

};

// const walletConnector = new WalletConnector(
//   "https://bridge.walletconnect.org",
//   {
//     sessionId,
//     sharedKey,
//     dappName: 'Walletconnect test'
//   }
// );