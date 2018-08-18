/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
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
  H3,
  Left,
  Right,
  Body
} from "native-base";

/* --- Component Dependencies ---*/
import styles from "./styles";
import FooterTabMenu from './menu.js'
import DemoTransactions from './demoTransactions'
import bgUniverse from "src/assets/images/bgUniverse.jpg";

import TransactionToken from "interface/components/TransactionToken";
import AccountSelect from "interface/fields/AccountSelect";
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
            <Title>Activity</Title>
          </Body>
          <Right>
            <Icon 
              onPress={() => this.props.navigation.navigate("QRScanner")}
              style={{color:"#FFF"}} name="qr-scanner" 
            />
          </Right>
        </Header>

        <ImageBackground source={bgUniverse} style={styles.imageContainer}>
          <Text style={{ color: '#FFF', fontSize: 10 }}>Account: 0xkAmE5....G3r</Text>
          {/* <View>
            <AccountSelect/>
          </View> */}
        </ImageBackground>
        <Content padder>
          {/* <View style={{margin: 0, padding: 0}} >
            <AccountSelect/>
          </View> */}
          {DemoTransactions.map((item, index)=><TransactionToken key={index} {...item} />)}
        </Content>

        <Footer>
          <FooterTabMenu/>
        </Footer>
      </Container>
    );
  }
}

