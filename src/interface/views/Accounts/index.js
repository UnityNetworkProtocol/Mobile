/* --- Global Dependencies ---*/
import firebase from "react-native-firebase";
import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Footer,
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/general/HeaderStandard";

/* --- Component Dependencies ---*/
import styles from "./styles";
import AccountTabs from "./Tabs";

/*--- React Component --- */
export default class Settings extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <HeaderStandard title="Accounts" />
        <AccountTabs />
      </Container>
    );
  }
}

