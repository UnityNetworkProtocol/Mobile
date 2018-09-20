import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, ImageBackground, TouchableOpacity } from "react-native";

import {
  H3,
  Content,
  Text,
  List,
  Container,
} from "native-base";

import { Icon, Flex, View } from "atomic";

/* --- Local Modules --- */
// Assets
import styles from "./style";
import ListItemParent from "./ListItemParent";
import bgUniverse from "src/assets/images/bgUniverse.jpg";
import blockiePurple from "assets/blockiePurple.png";

// Static Data
import datas from "static/menu.js";

// Components
import ToastMessage from "interface/components/toast/ToastMessage";
import ModalAccountQR from "interface/components/modal/ModalAccountQR";
import AccountSelectionSidebar from "interface/components/account/AccountSelectionSidebar";
// 
class SideBar extends Component {
  render() {
    return (
      <Container style={{padding:0}} >
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1, padding:0 }}>

          {/* 
            Sidebar Header
          */}
          <ImageBackground source={bgUniverse} style={styles.imageContainer}>
            <AccountSelectionSidebar/>
          </ImageBackground>

          
          <Flex style={{backgroundColor: "#71bc20", paddingVertical: 7, paddingHorizontal: 5 }} >
            <Flex justify="flex-start" style={{width: "80%"}} >
              {/* <Icon style={{ color: "#FFF", fontSize: 16, marginRight: 5}} name="ios-contact-outline" /> */}
              <Text style={{ color: "#FFF", fontSize: 12, marginRight: 5}}>Wallet:</Text>
              <Image style={{width: 15, height:15, marginRight: 5}} source={blockiePurple}/>
              <Text style={{ color: "#FFF", fontSize: 10, marginRight: 5}}>0xc78ba87a03...4390fd9f36f</Text>
            </Flex>
            <Flex justify="flex-end" style={{width: "20%"}} >
              <ToastMessage
                text="Address Copied"
                buttonText="OK"
              >
                <Icon style={{ color: "#FFF", fontSize: 18, marginRight: 10}} color="#FFF" name="ios-link" />
              </ToastMessage>
              <ModalAccountQR/>
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("TokenQuest")}>
            <Flex justify="center" align="center" style={{backgroundColor: "#1c9fd0", paddingVertical: 12, paddingHorizontal: 5 }} >
                <Text style={{ color: "#FFF", fontSize: 13}}>Join The</Text>
                <Icon style={{ color: "#FFF", fontSize: 18, marginHorizontal: 10}} color="#FFF" name="ios-pin-outline" />
                <Text style={{ color: "#FFF", fontSize: 13}}>Global</Text>
                <Icon style={{ color: "#FFF", fontSize: 18, marginHorizontal: 10}} color="#FFF" name="ios-people-outline" />
                <Text style={{ color: "#FFF", fontSize: 13}}>Token Hunt</Text>
            </Flex>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(SideBar);
