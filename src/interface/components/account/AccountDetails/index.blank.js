/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, ImageBackground, StyleSheet } from "react-native";
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
class AccountDetails extends Component {
  render() {
    return (
      <Card style={{borderRadius: 10, color: "white"}} >
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={["#f7f7f7", "#f1f4f6"]}
          style={styles.linearGradient}>
          <ImageBackground source={this.props.bg || iconEthOpacity10} style={styles.imageContainer}>

          <Flex >
          <Left>
            <Flex>
              <View boxShadow={"2px 3px #000"} style={{backgroundColor: "#FFF", borderRadius: 10, padding: 7 }} >
                <Image style={{width: 35, height:35}} source={this.props.blockie || Logo}/>
              </View>
              <Flex direction="column" style={{paddingLeft:10}} >
                <Icon style={{ color: "#90989c", fontSize: 20, marginTop: 15}} name="ios-help-circle-outline" />
              </Flex>
            </Flex>
            <Text style={{color: "#90989c", fontSize: 10, paddingTop: 5}} note>0xk3m5sc...0x53r3gH7y</Text>
          </Left>
          <Right>
              <Text style={{color: "#90989c", fontSize: 20}} >{this.props.category || "General"}</Text>
              <Text style={{color: "#90989c", fontSize: 12}} note>{this.props.transactionsCount || 0} Interactions</Text>
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
            <Text style={{color: "#90989c", fontSize: 20}}>ETH: {this.props.balanceEth || 0}</Text>
            <Text style={{color: "#90989c",fontSize: 12}} note>Tokens: {this.props.balanceTokens || 0} | ${this.props.balanceCurrency || 0}</Text>
          </Flex>
          <Flex direction="row" justify="flex-end" width={"45%"}>
            <Button icon
              onPress={() => this.props.navigation.navigate("AccountOverview",
            {
              account: "0x43kf55ab17f"
            })}
              >
              <Image style={{ marginLeft:10, height:20, width: 20,}} source={iconEth}/>
              <Text style={{color: "#FFF", fontSize: 14}}>View Account</Text>
            </Button>
          </Flex>
        </Flex>

        <Flex align="center">
          <Flex align="center" justify={"flex-start"} width={"80%"} >
              <Text style={{ color: "#90989c", fontSize: 12, paddingRight: 10}}>Transactions</Text>
              <Text style={{ color: "#90989c", fontSize: 12, paddingRight: 10}}>Subscriptions</Text>
              {/* <Text style={{ color: "#FFF", fontSize: 12, paddingRight: 10}}>Tokens</Text> */}
          </Flex>
          <Flex justify="flex-end" style={{width: "20%"}}>
            <Icon style={{ color: "#90989c", fontSize: 16, marginRight: 10}} color="#FFF" name="ios-link-outline" />
            <Icon style={{ color: "#90989c", fontSize: 16, marginTop: 1}} name="ios-menu" />
          </Flex>
        </Flex>
        </ImageBackground>
        </LinearGradient>
      </Card>
    );
  }
}

export default withNavigation(AccountDetails);

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 10
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
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 20,
  },
});