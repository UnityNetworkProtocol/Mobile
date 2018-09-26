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
  <Button onPress={()=>props.walletSign()} >
    <Text>Dispatch Transaction</Text>
  </Button>
</Flex>