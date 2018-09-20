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
import HeaderStandard from "interface/components/general/HeaderStandard";
import GuideKeyManagement from "interface/components/guide/GuideKeyManagement";

/* --- Component Dependencies ---*/
import styles from "./styles";


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

