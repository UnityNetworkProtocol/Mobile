/* --- Global Dependencies ---*/
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/HeaderStandard";

/* --- Component Dependencies ---*/
import styles from "./styles";
import AttestationTabs from "./Tabs";

export default class Attestations extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderStandard title="Identity" {...this.props}/>
        <AttestationTabs/>
      </Container>
    );
  }
}

