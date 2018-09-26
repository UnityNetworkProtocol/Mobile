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
/* ------- React Component ------- */
export default props =>
<Flex direction="column">
  <Button onPress={()=>props.nonceCheck(props.accountActive)} >
    <Text>Update Active Wallet Nonce</Text>
  </Button>
</Flex>