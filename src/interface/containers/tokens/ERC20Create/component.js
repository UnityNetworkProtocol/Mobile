/* --- Global Dependencies --- */
import React from "react";
import { Button } from "native-base";

/* --- Local Dependencies --- */
import {
  Flex,
  Text
} from "atomic";

/* ------- React Component ------- */
export default props =>
<Flex>
  <Button onPress={()=>props.contractDeploy(props.accountActive, props.nonce)}>
    <Text>
      Deploy ERC20 Token
    </Text>
  </Button>
</Flex>