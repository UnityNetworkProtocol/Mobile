/* --- Global Dependencies --- */
import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Card,
  Content,
  Container,
  Button,
  Left,
  Right,
  View,
} from "native-base";

/* --- Local Dependencies --- */
import {
  Flex,
  Icon,
  Text,
} from "atomic";
import TransactionToken from "interface/components/TransactionToken";

import Logo from "assets/logo.png";
import iconEth from "assets/iconEth.png";
import iconEthOpacity10 from "assets/iconEthOpacity10.png";
import DemoTransactions from "demo/data/transactions";
/* ------- React Component ------- */
export default props =><Container>
  <Content>
    <Card style={{color: "white", borderRadius: 5}} >
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={props.gradient || ["#2bace8", "#06559b"]}
        style={styles.linearGradient}>
        <ImageBackground source={props.bg || iconEthOpacity10} style={styles.imageContainer}>

        <Flex >
        <Left>
          <Flex>
            <View boxShadow={"2px 3px #000"} style={{backgroundColor: "#FFF", borderRadius: 10, padding: 7 }} >
              <Image style={{width: 35, height:35}} source={props.blockie || Logo}/>
            </View>
            <Flex direction="column" style={{paddingLeft:10}} >
              <Icon style={{ color: "#FFF", fontSize: 20, marginTop: 15}} name="ios-help-circle-outline" />
            </Flex>
          </Flex>
          <Text style={{color: "#FFF", fontSize: 10, paddingTop: 5}} note>0xk3m5sc...0x53r3gH7y</Text>
        </Left>
        <Right>
            <Text style={{color: "#FFF", fontSize: 20}} >{props.category || "General"}</Text>
            <Text style={{color: "#FFF", fontSize: 12}} note>{props.transactionsCount || 0} Interactions</Text>
            <Flex justify="flex-end" style={{paddingTop: 5}} >
              {
                props.interactions &&
                props.interactions.map(item=>
                <View key={item.address} boxShadow={"2px 3px #000"} style={{backgroundColor: "#FFF", borderRadius: 4, marginLeft: 5, padding: 3 }} >
                  <Image style={{ height:20, width: 20,}} source={item.logo}/>
                </View> )
              }
            </Flex>
        </Right>
      </Flex>

      <Flex style={{marginVertical: 15}} >
        <Flex direction="column" width={"55%"} >
          <Text style={{color: "#FFF", fontSize: 20}}>ETH: {props.balanceEth || 0}</Text>
          <Text style={{color: "#FFF",fontSize: 12}} note>Tokens: {props.balanceTokens || 0} | ${props.balanceCurrency || 0}</Text>
        </Flex>
        <Flex direction="row" justify="flex-end" width={"45%"}>
          <Button icon
            onPress={() => props.navigation.navigate("AccountOverview",
          {
            account: "0x43kf55ab17f"
          })}
            >
            <Image style={{ marginLeft:10, height:20, width: 20,}} source={iconEth}/>
            <Text style={{color: "#FFF", fontSize: 14}}>Add Funds</Text>
          </Button>
        </Flex>
      </Flex>

      <Flex align="center">
        <Flex align="center" justify={"flex-start"} width={"80%"} >
            <Text style={{ color: "#FFF", fontSize: 12, paddingRight: 10}}>Transactions</Text>
            <Text style={{ color: "#FFF", fontSize: 12, paddingRight: 10}}>Subscriptions</Text>
            {/* <Text style={{ color: "#FFF", fontSize: 12, paddingRight: 10}}>Tokens</Text> */}
        </Flex>
        <Flex justify="flex-end" style={{width: "20%"}}>
          <Icon style={{ color: "#FFF", fontSize: 16, marginRight: 10}} color="#FFF" name="ios-link-outline" />
          <Icon style={{ color: "#FFF", fontSize: 16, marginTop: 1}} name="ios-menu" />
        </Flex>
      </Flex>
      </ImageBackground>
      </LinearGradient>
    </Card>
    <View style={{backgroundColor: "#FFF", padding: 10}} >
      {DemoTransactions.map((item, index)=><TransactionToken key={index} {...item} />)}
    </View>
  </Content>
</Container>;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  imageContainer: {
    alignItems: "center",
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
  },
});