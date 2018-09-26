/* --- Global Dependencies --- */
import React from "react";
import { 
  Button
} from "native-base";
/* --- Local Dependencies --- */
import {
  Flex,
  Text
} from "atomic";
import BlockchainTransaction from "interface/components/blockchain/BlockchainTransaction";
/* ------- React Component ------- */
export default props => 
<Flex direction="column">
  {
    !(props.history && props.history.status) ? null :
    props.history.data.map((item, index) => <BlockchainTransaction key={index} {...item} />)
  }
  <Button onPress={()=>props.walletSign()} >
    <Text>Get Wallet Transaction</Text>
  </Button>
</Flex>