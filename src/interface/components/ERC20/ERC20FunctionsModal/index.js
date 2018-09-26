/* --- Global Modules ---*/
import React from "react";
/* --- Local Modules --- */
import {
  Flex,
  Text,
} from "atomic";

export default props => {
  switch (props.function) {
    case "transfer":
        return [
          <Flex key={"sendTo"} align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginBottom: 10, padding: 7 }} >
            <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
              <Text>To</Text>
            </Flex>
            <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
              <Text note width="100%">{props.input[0]}</Text>
            </Flex>
          </Flex>,
          <Flex key={"sendAmount"} align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, padding: 7 }} >
            <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
              <Text>Transfer</Text>
            </Flex>
            <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
              <Text width="100%" style={{textAlign: "right"}}>$45.26</Text>
              <Text note width="100%">{props.input[1]}</Text>
            </Flex>
          </Flex>
        ];
      case "transferFrom":
        return null;
      case "approve":
        return null;
      case "transferFrom":
        return null;
    default:
    return null;
  }
}