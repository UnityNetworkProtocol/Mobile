/* --- Global Dependencies ---*/
import React, { Component } from "react";
import styled from "styled-components";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Footer,
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/HeaderStandard";
import Modal from "interface/components/Modal";
import TransactionModal from "interface/components/TransactionModal";

/* --- Component Dependencies ---*/
import styles from "./styles";
import AccountTabs from "./Tabs";

/*--- React Component --- */
export default class Settings extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <HeaderStandard title="Activity" />
        <AccountTabs/>
      </Container>
    );
  }
}

