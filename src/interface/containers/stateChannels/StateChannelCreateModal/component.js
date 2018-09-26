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
  <Button onPress={()=>props.contractDeploy()}>
    <Text>
      Deploy Contract
    </Text>
  </Button>
</Flex>