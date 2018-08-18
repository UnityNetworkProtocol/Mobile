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


import EthersWalletCreateRandom from "containers/EthersWalletCreateRandom";
import styles from "./styles";
export default class Wallet extends Component {
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
            <Title>Wallet</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Wallet Information</Text>
          <EthersWalletCreateRandom/>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Wallet Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

