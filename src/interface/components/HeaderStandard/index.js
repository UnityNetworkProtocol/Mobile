/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body
} from "native-base";
import LinearGradient from "react-native-linear-gradient";

import {
  Flex,
  Icon,
  Text,
  View
} from "atomic";
import HeaderFab from "interface/components/HeaderFab";
/* --- Component Dependencies ---*/
class HeaderStandard extends Component {
  render() {
    return (
      <View style={{zIndex: 1000, position: "relative", overflow: "visible"}} >
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={this.props.gradient || ["#6832a2", "#4e3df5"]}
          style={styles.linearGradient}
          >
          <Flex>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")} >
              <Icon style={{color: "#FFF"}} name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            {/* <HeaderFab/> */}
            <Icon  onPress={() => this.props.navigation.navigate("QRScanner")} style={{color:"#FFF"}} name="ios-qr-scanner-outline"/>
          </Right>
          </Flex>
        </LinearGradient>
      </View>
    );
  }
}

export default withNavigation(HeaderStandard);
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 30,
    width: "100%",
    overflow: "visible",
    zIndex: 1000
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

