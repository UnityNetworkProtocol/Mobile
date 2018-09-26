# EthTypedObject library
TLDR; Simple library for developers to use SignedTypedData from JavaScript.

Problem: Current libraries require you to build a complicated structure like this to pass into eth_signTypedData().

```json
  {
    "types": {
      "EIP712Domain": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "version",
          "type": "string"
        },
        {
          "name": "chainId",
          "type": "uint256"
        },
        {
          "name": "verifyingContract",
          "type": "address"
        }
      ],
      "Email": [
        { 
          "name": "subject",
          "type": "address"
        },
        {
          "name": "keccak256",
          "type": "bytes32"
        },
        {
          "name": "validFrom",
          "type": "uint256"
        },
        {
          "name": "validTo",
          "type": "uint256"
        }
      ]
    },
    "primaryType": "Email",
    "domain": {
      "name": "EIP1??? Claim",
      "version": "1",
      "chainId": 1,
      "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"
    },
    "message": {
      "subject": "0x5792e817336f41de1d8f54feab4bc200624a1d9d",
      "value": "9c8465d9ae0b0bc167dee7f62880034f59313100a638dcc86a901956ea52e280",
      "validFrom": "0x0000000000000000000000000000000000000000000000000001644b74c2a0",
      "validTo": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    }
  }
```

Instead of the above I propose a simple library to create Objects for signing the above.

Eg:

```javascript=
import { EIP712Domain } from 'eth-signed-objects'
import { SimpleSigner } from 'did-jwt'
import { Web3 } from 'web3'

const VerifiedEmailDomain = new EIP712Domain({
	name: 'VerifiedEmail',
	chainId: 1,
	version: 0,
	verifyingContract: '0x...'
})

const VerifiedEmail = VerifiedEmailDomain.createClass([
	{ 
	  "name": "issuer",
	  "type": "address"
	},
	{ 
	  "name": "subject",
	  "type": "address"
	},
	{
	  "name": "value",
	  "type": "string"
	},
	{
	  "name": "validFrom",
	  "type": "uint256"
	},
	{
	  "name": "validTo",
	  "type": "uint256"
	}
])

const verifiedEmail = new VerifiedEmail({
	issuer: '0x01...',
	subject: '0x01...',
	value: 'carol@sample.com',
	validFrom: new Date(),
	validTo: new Date() + 86500
})

// ABI encoded version of typed data (for passing into signing code or contract function)
const encoded = verifiedEmail.encode()

const signer = SimpleSigner(privateKey)

const signed = verifiedEmail.sign(signer)

const web3signed = web3.signedTypedData('0x01...', verifiedEmail.toSignatureRequest())

// The signed data along with signature can be passed into constructor of object and it verifies and parses it.
const verified = new VerifyEmail(signed)    
```



