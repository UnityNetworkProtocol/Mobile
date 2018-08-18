/* --- Global Dependencies ---*/
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

/* --- Component Dependencies ---*/
import styles from "./styles";
import FooterTabMenu from './menu.js'

import Picker from 'screens/picker/picker-with-icon.js'
import NetworkSelect from "interface/fields/NetworkSelect";

export default class Settings extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <NetworkSelect/>
        </Content>

        <Footer>
          <FooterTabMenu/>
        </Footer>
      </Container>
    );
  }
}

