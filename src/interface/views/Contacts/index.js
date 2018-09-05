/* --- Global Dependencies ---*/
import React from "react";
import {
  Container,
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/HeaderStandard";

/* --- Component Dependencies ---*/
import styles from "./styles";
import ContactTabs from "./Tabs";

/*--- React Component --- */
export default props =>
<Container style={styles.container}>
  <HeaderStandard title="Contacts"/>
  <ContactTabs/>
</Container>;
