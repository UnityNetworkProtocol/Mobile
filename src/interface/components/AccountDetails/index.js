/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Card,
  Button,
  Left,
  Right,
} from "native-base";

/* --- Local Dependencies ---*/
import {
  Flex,
  Icon,
  Text,
  View
} from "atomic";

import Logo from "assets/logo.png";
import iconEth from "assets/iconEth.png";
import iconEthOpacity10 from "assets/iconEthOpacity10.png";

/* --- React Component ---*/
export default class Settings extends Component {
  render() {
    return (
      <Card style={{color: "white"}} >
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={this.props.gradient || ["#2bace8", "#06559b"]}
          style={styles.linearGradient}>
          <ImageBackground source={this.props.bg || iconEthOpacity10} style={styles.imageContainer}>

          <Flex >
          <Left>
            <Flex>
              <View boxShadow={"2px 3px #000"} style={{backgroundColor: "#FFF", borderRadius: 10, padding: 7 }} >
                <Image style={{width: 35, height:35}} source={this.props.blockie || Logo}/>
              </View>
              <Flex direction="column" style={{paddingLeft:10}} >
                <Icon style={{ color: "#FFF", fontSize: 20, marginTop: 15}} name="ios-help-circle-outline" />
              </Flex>
            </Flex>
            <Text style={{color: "#FFF", fontSize: 10, paddingTop: 5}} note>0xk3m5sc...0x53r3gH7y</Text>
          </Left>
          <Right>
              <Text style={{color: "#FFF", fontSize: 20}} >{this.props.category || "General"}</Text>
              <Text style={{color: "#FFF", fontSize: 12}} note>{this.props.transactionsCount || 0} Interactions</Text>
              <Flex justify="flex-end" style={{paddingTop: 5}} >
                {
                  this.props.interactions &&
                  this.props.interactions.map(item=>
                  <View key={item.address} boxShadow={"2px 3px #000"} style={{backgroundColor: "#FFF", borderRadius: 4, marginLeft: 5, padding: 3 }} >
                    <Image style={{ height:20, width: 20,}} source={item.logo}/>
                  </View> )
                }
              </Flex>
          </Right>
        </Flex>

        <Flex style={{marginVertical: 15}} >
          <Flex direction="column" width={"55%"} >
            <Text style={{color: "#FFF", fontSize: 20}}>ETH: {this.props.balanceEth || 0}</Text>
            <Text style={{color: "#FFF",fontSize: 12}} note>Tokens: {this.props.balanceTokens || 0} | ${this.props.balanceCurrency || 0}</Text>
          </Flex>
          <Flex direction="row" justify="flex-end" width={"45%"}>
            <Button icon>
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
    );
  }
}

// Later on in your styles..
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