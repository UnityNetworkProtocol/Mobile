import urlParser from "url-parse";
import parseJson from "parse-json";
import isJson from "is-json";
import fromExponential from 'from-exponential';
import ethers from "ethers"
import identity, { verify } from './identity';
// import RNWalletConnect from "rn-walletconnect-wallet";
// import { WalletConnector } from "walletconnect";
import { Linking } from "react-native";

import validate from "validate.js";
const { utils } = ethers;


const VerifyStuff = async data => await identity.verify(data);
/* --- Module --- */
export default async (e) => {
  try {
    const isJsonObject = isJson(e.data);
    switch (isJsonObject) {
      case true:
        const data = parseJson(e.data);
        const parsed = qrObjectParse(data);
        isWalletConnect(parsed);
        return "transaction";
      case false:
        const parsedTransaction = parseQRTransaction(e.data);
        const parsedTransactionQuery = parseURLProtocol(parsedTransaction);
        const parsedAddressFunction = parseAddressFunction(parsedTransaction.pathname);

        console.log(parsedTransaction) 
        console.log(parsedTransactionQuery)
        
        switch (parsedTransaction.protocol) {
          case 'me.uport:':
            console.log('uporrrt')
            console.log(parsedTransaction) 
            console.log(parsedTransactionQuery)
            const attestationUport = await identity.verify(parsedTransactionQuery.object.attestations) 
            return {
              type: "attestation",
              attestation: attestationUport
            }
          case 'did:':
            const attestation = await identity.verify(parsedTransactionQuery.object.attestation) 
            return {
              type: "attestation",
              attestation
            }
            break;
            case "ethereum:":
              /**
               * Determine if QR code is ETH Transfer or ETH Smart Contract call.
               * Notes(@kamescg): This simple like the most simple way to determin if the
               * EIP 831 URI format contains only a transfer or function call by splitting
               * the URI pathname at "/" and IF length 1 it's ETH transfer if IF length 2
               * it's a Smart Contract function.
               */
              return (parsedAddressFunction.length = 1)
                ? generateTransferParameters(parsedTransactionQuery, parsedAddressFunction)
                : generateFunctionParameters(parsedTransactionQuery, parsedAddressFunction);
          default:
            break;
        }
        break;
      default:
        console.log("QRCode: Error");
        break;
    }

    if (isValidUrl(e.data)) {
      Linking
        .openURL(e.data)
        .catch(err => console.error("An error has occured", err));
    };

  } catch(err) {
    console.log(err)
  }


};

/**
 * Generate the Transfer Parameters to be consumed by "EthTransfer" components
 * 
 * @method generateTransferParameters
 * @param {Object} parsedTransactionQuery 
 * @param {Object} parsedAddressFunction 
 * @return {Object} 
 */
const generateTransferParameters = (parsedTransactionQuery, parsedAddressFunction) => {
  console.log(parsedTransactionQuery)
  return {
    type: "transfer",
    address: parsedAddressFunction[0], // Smart Contract Address
    value: parsedTransactionQuery.object.value,
    // valueBN: utils.parseEther(parsedTransactionQuery.object.value),
    valueCalc: fromExponential(parsedTransactionQuery.object.value)
  };
};

/**
 * * Generate the Transfer Parameters to be consumed by specific ABI smart contract components
 * 
 * @method generateFunctionParameters
 * @param {Object} parsedTransactionQuery 
 * @param {Object} parsedAddressFunction 
 * @return {Object} 
 */
const generateFunctionParameters = (parsedTransaction, parsedTransactionQuery, parsedAddressFunction) => {
  // Separate essential smart contract input data from unity UX/UI metadata (readme: UX/UI metadata)
  const extractedInputMetadata = extractFunctionInputsMetadata(
    parsedTransactionQuery.object.spec,
    parsedAddressFunction[1],
    parsedTransactionQuery
  );
  return {
    type: "function",
    specification: parsedTransactionQuery.object.spec,
    address: parsedAddressFunction[0], // Smart Contract Address
    function: parsedAddressFunction[1], // Smart Contract Function
    input: extractedInputMetadata.input,
    meta: extractedInputMetadata.meta
  };
};

/**
 * Extract smart contract input variables from input metadata
 * @param {String} specification Smart Contract Specfication (example: ERC20)
 * @param {String} abiFunction Smart Contract Function (example: transfer)
 * @param {Object} query The Ethereum URL queries in array and object format
 */
const extractFunctionInputsMetadata = (specification, abiFunction, query) => {
  switch (specification) {
    case "ERC20":
        return extractERC20Inputs(abiFunction, query);
    default:
      break;
  }
}

/**
 * Extract inputs/metadata for ERC20 Smart Contract
 * @param {String} abiFunction 
 * @param {Array} query 
 */
const extractERC20Inputs = (abiFunction, query) => {
  switch (abiFunction) {
    case "transfer":
        return {
          input: query.array.slice(0,2),
          meta: query.array.slice(2),
        };
    default:
      break;
  }
};

/**
 * Identity the URL protocol and parse query string.
 * @param {Object} object 
 */
const parseURLProtocol = URLParsed => {
  switch (URLParsed.protocol) {
    case "me.uport:":
      return {
        array: parseQueryArray(URLParsed.query),
        object: parseQueryObject(URLParsed.query)
      };
    case "did:":
      return {
        array: parseQueryArray(URLParsed.query),
        object: parseQueryObject(URLParsed.query)
      };
    case "ethereum:":
      return {
        array: parseQueryArray(URLParsed.query),
        object: parseQueryObject(URLParsed.query)
      };
    case "https:":
      return {
        array: parseQueryArray(URLParsed.query),
        object: parseQueryObject(URLParsed.query)
      }
    default:
      return null;
  }
}

const parseDidType = data => {
  switch (data) {
    case "self":
      
      break;
  
    default:
      break;
  }
}

const parseQRTransaction = string => {
  return urlParser(string);
}

/**
 * Parse the address/function from the Ethereum URL (address/function) 
 * @param {String} string 
 */
const parseAddressFunction = string => {
  return string.split("/");
}

/**
 * Parse a URL query string into object e.x. ?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1&name=Token Transfer
 * @param {String} queryString 
 */
const parseQueryArray = queryString => {
  var query = [];
  var pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      query.push(decodeURIComponent(pair[1] || ""));
  }
  return query;
}

/**
 * Parse a URL query string into object e.x. ?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1&name=Token Transfer
 * @param {String} queryString 
 */
const parseQueryObject = queryString => {
  var query = {};
  var pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}


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
  // console.log(o);
  // const walletConnector = new RNWalletConnect(
  //   {
  //     bridgeUrl: "https://bridge.walletconnect.org", 
  //     sessionId: sessionId,
  //     sharedKey: sharedKey,
  //     dappName: "Unity"
  //   }
  // );

  try {
    // walletConnector.sendSessionStatus({
    //   fcmToken: true,
    //   pushEndpoint: "https://us-central1-walletconnect-app.cloudfunctions.net/push",
    //   data: {
    //     accounts: [
    //       "0x0000000000000000000000000000000000000000"
    //     ]
    //   }
    // })
  } catch(err) {
    console.log(err)
  }

};

// const walletConnector = new WalletConnector(
//   "https://bridge.walletconnect.org",
//   {
//     sessionId,
//     sharedKey,
//     dappName: "Walletconnect test"
//   }
// );