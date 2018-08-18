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

/* --- Component Dependencies ---*/
import styles from "./styles";
import Tabs from "./Tabs";

export default class Attestations extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Attestations</Title>
          </Body>
          <Right />
        </Header>

        {/* --- Tabs --- */}
        <Tabs/>

      </Container>
    );
  }
}

