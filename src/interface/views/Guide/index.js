/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Footer,
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/HeaderStandard";
import TransactionToken from "interface/components/TransactionToken";
import AccountSelect from "interface/fields/AccountSelect";

/* --- Component Dependencies ---*/
import styles from "./styles";
import FooterTabMenu from './menu.js'
import DemoTransactions from './demoTransactions'
import bgUniverse from "src/assets/images/bgUniverse.jpg";
import AccountTabs from "./Tabs";

import GuideKeyManagement from "interface/components/GuideKeyManagement";

/*--- React Component --- */
export default class Settings extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderStandard title="Guides" {...this.props} />
        <GuideKeyManagement/>
      </Container>
    );
  }
}

