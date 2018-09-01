/* --- Global Dependencies --- */
import React from "react";
import { withNavigation } from "react-navigation";
import {
  Container,
  Link,
} from "native-base";
/* --- Local Dependencies --- */
import {
  Flex,
  Icon,
  Text,
} from "atomic";
import HeaderStandard from "interface/components/HeaderStandard";
/* ------- React Component ------- */
const Component = props =>
<Container>
  <HeaderStandard title={props.data.transaction} />
  <Text>
    Transaction
  </Text>
</Container>;

export default withNavigation(Component)