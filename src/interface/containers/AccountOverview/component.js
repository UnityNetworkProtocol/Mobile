/* --- Global Dependencies --- */
import React from "react";
import {
  Container,
} from "native-base";

/* --- Local Dependencies --- */
import {
  Flex,
  Icon,
  Text,
} from "atomic";
import HeaderStandard from "interface/components/general/HeaderStandard";
import AccountTabs from "./Tabs";
/* ------- React Component ------- */
export default props =>
<Container>
  <HeaderStandard title={props.address} />
  <AccountTabs {...props}/>
</Container>;
