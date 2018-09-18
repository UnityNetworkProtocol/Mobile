/* --- External Modules --- */
import React, { Component } from "react";
import { Image, ImageBackground, StatusBar } from "react-native";
import { Container, Content, Button, H3 } from "native-base";

/* --- Local Modules --- */
import styles from "./styles";
// Assets
import avatarDemo from "assets/images/avatarDemo.jpg";
import bgUniverse from "src/assets/images/bgUniverse.jpg";
// Forms
import AccountLogin from "forms/AccountLogin";
import AccountSelection from "interface/components/AccountSelection";
import TransactionTokenItem from "interface/components/TransactionTokenItem";
import DemoTransactions from "demo/data/transactions";
import {
  Flex,
  Icon,
  Text,
  View
} from "atomic";


const EthAmount = props => <Flex
  align="center" justify="center"
  style={styles.viewEth}>
  <Text style={styles.textBalance}>32</Text>
  {/* <Text style={styles.textAccount}>ETH</Text> */}
</Flex>
/* --- React Component --- */
export default class Home extends Component {
  render() {
    return (
      <Container>
        {/* <StatusBar barStyle="light-content" /> */}
        {/* <ImageBackground source={bgUniverse} style={styles.imageContainer}> */}
          <View style={styles.logoContainer}>
            <AccountSelection/>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "transparent",
                height: 130,
                marginTop: 30,
                width: "100%"
              }}
            >
              <AccountLogin/>
            </View>
          </View>
          <Container style={{backgroundColor: "transparent", height: 150, padding: 10}} >
            <Content>
              {DemoTransactions.map((item, index)=><TransactionTokenItem key={index} {...item} />)}
            </Content>
          </Container>
        {/* </ImageBackground> */}
      </Container>
    );
  }
}

