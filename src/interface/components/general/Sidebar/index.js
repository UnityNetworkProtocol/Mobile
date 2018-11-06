import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
import AccountSelectionSidebar from "interface/containers/interface/AccountSelectionSidebar";
// 
class SideBar extends Component {
  render() {
    return (
      <Container style={{padding:0}} >
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1, padding:0 }}>

          {/* 
            Sidebar Header
          */}
          <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={this.props.gradient || ["#6832a2", "#4e3df5"]}
            style={styles.linearGradient}
            >
            <AccountSelectionSidebar/>
          </LinearGradient>
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
