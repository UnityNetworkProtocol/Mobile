/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import AccountDetails from "interface/components/account/AccountDetails";
import {
  Flex,
  Text
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex direction="column" >
  {Object.keys(props.wallets).map((element, i) => <AccountDetails key={i} {...props.wallets[element]}/>)}
</Flex>