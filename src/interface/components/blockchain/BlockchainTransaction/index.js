/* --- Global Dependencies --- */
import React from "react";
import { Linking,  } from "react-native";
import {
  Card,
  CardItem,
  Button
} from "native-base";
/* --- Local Dependencies --- */
import {
  Flex,
  Text
} from "atomic";

/* ------- React Component ------- */
export default props =>
<Card style={{padding: 15}} >
  <CardItem bordered>
    <Flex direction="column">
      <Flex align="center">
        <Text style={{fontWeight: "bold", fontSize: 16}}>Block: </Text>
        <Text note>{props.blockNumber}</Text>
      </Flex>
      <Flex align="center">
        <Text style={{fontWeight: "bold"}}>Timestamp: </Text>
        <Text note>{props.timestamp}</Text>
      </Flex>
      <Flex align="center">
        <Text style={{fontWeight: "bold"}}>Gas Price: </Text>
        <Text note>{props.gasPrice.toString()}</Text>
      </Flex>
      <Flex align="center">
        <Text style={{fontWeight: "bold"}}>Gas Limit: </Text>
        <Text note>{props.gasLimit.toString()}</Text>
      </Flex>
    </Flex>
  </CardItem>
  <CardItem bordered>
    <Flex direction="column">
      <Text style={{fontWeight: "bold"}}>From:</Text>
      <Text note>{props.from}</Text>
      <Text style={{fontWeight: "bold"}}>To:</Text>
      <Text note>{props.to}</Text>
      <Text style={{fontWeight: "bold"}}>Data:</Text>
      <Text note>{props.data}</Text>
    </Flex>
  </CardItem>
  <CardItem bordered>
    <Button onPress={()=>{ Linking.openURL(`https://etherscan.io/tx/${props.hash}`)}}><Text>Etherscan</Text></Button>
  </CardItem>
</Card>


// blockHash
// :
// "0xe1adbb8cbfed1ebf8246f4930d260f35917f7310a369f95a70b7a8ed6a6b62be"
// blockNumber
// :
// 2796940
// creates
// :
// null
// data
// :
// "0x"
// from
// :
// "0x908BD5E5e5636C84A16d2541Af4696Ab53dAFE07"
// gasLimit
// :
// BigNumber
// gasPrice
// :
// BigNumber
// hash
// :
// "0x4133fba3efafe4b8407f492644beec83173e35ad7d916680bf9b4f3dad49d672"
// networkId
// :
// 0
// nonce
// :
// 80
// timestamp
// :
// 1534024208
// to
// :
// "0xC78Ba87a035126d40bFF69D731B2e4390fd9F36f"
// transactionIndex
// :
// 3