import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, ImageBackground } from "react-native";
import {
  H3,
  Content,
  Text,
  List,
  Container,
} from "native-base";

import { Icon, Flex, View } from "atomic";

import ListItemParent from "./ListItemParent";
import datas from "static/menu.js";
import styles from "./style";
import bgUniverse from "src/assets/images/bgUniverse.jpg";
import blockiePurple from "assets/blockiePurple.png";
    
class SideBar extends Component {
  render() {
    return (
      <Container style={{padding:0}} >
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1, padding:0 }}>

          {/* 
            Sidebar Header
          */}
          <ImageBackground source={bgUniverse} style={styles.imageContainer}>
            <View>
              <H3 style={styles.textLogo}>UNITY</H3>
              <Text style={{fontSize: 12, color: "#FFF", textAlign:"center"}}>
                Universal Wallet
              </Text>
              <Flex justify="space-evenly" style={{paddingVertical:10}} >
                <Text style={{ color: "#D8D8D8", fontSize: 10, textAlign:"center"}}>
                  blockchain: ethereum
                </Text>
                <Text style={{ color: "#D8D8D8", fontSize: 10, textAlign:"center"}}>
                  network: mainnet
                </Text>
              </Flex>
            </View>
          </ImageBackground>

          
          <Flex style={{backgroundColor: "#71bc20", paddingVertical: 7, paddingHorizontal: 5 }} >
            <Flex justify="flex-start" style={{width: "80%"}} >
              {/* <Icon style={{ color: "#FFF", fontSize: 16, marginRight: 5}} name="ios-contact-outline" /> */}
              <Text style={{ color: "#FFF", fontSize: 12}}>Wallet:</Text>
              <Image style={{width: 15, height:15}} source={blockiePurple}/>
              <Text style={{ color: "#FFF", fontSize: 12}}>Bounty (0xk3m5sc...)</Text>
            </Flex>
            <Flex justify="flex-end" style={{width: "20%"}} >
              <Icon style={{ color: "#FFF", fontSize: 18, marginRight: 10}} color="#FFF" name="ios-link" />
            </Flex>
          </Flex>
          {/* 
            Sidebar Menu
          */}
          <List
            dataArray={datas}
            style={{padding: 0, margin: 0}}
            contentContainerStyle={{padding:0, margin: 0}}
            renderRow={data => <ListItemParent navigation={this.props.navigation} {...data}/>}
          />
          {/* 
            Sidebar Footer
          */}
          <Flex justify="center" align="center" style={{backgroundColor: "#1c9fd0", paddingVertical: 12, paddingHorizontal: 5 }} >
            <Text style={{ color: "#FFF", fontSize: 13}}>Join The</Text>
            <Icon style={{ color: "#FFF", fontSize: 18, marginHorizontal: 10}} color="#FFF" name="ios-pin-outline" />
            <Text style={{ color: "#FFF", fontSize: 13}}>Global</Text>
            <Icon style={{ color: "#FFF", fontSize: 18, marginHorizontal: 10}} color="#FFF" name="ios-people-outline" />
            <Text style={{ color: "#FFF", fontSize: 13}}>Token Hunt</Text>
          </Flex>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(SideBar);
