/* --- Global Dependencies ---*/
import React from "react";
import { Image} from "react-native";
import {
  Container,
} from "native-base";
/* --- Local Dependencies ---*/
import {
  Flex,
  Text
} from "atomic";

import HeaderStandard from "interface/components/general/HeaderStandard";
import ContactItem from "interface/containers/contacts/ContactItem";

export default props =>
<Container>
  <HeaderStandard title="Contact"/>
  <ContactItem/>
</Container>;

