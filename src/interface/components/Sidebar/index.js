import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import {
  H3,
  Content,
  Text,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Badge
} from "native-base";

import { Icon, Flex, View } from "atomic";
import datas from "./menu.js";
import styles from "./style";
import bgUniverse from "src/assets/images/bgUniverse.jpg";
import blockiePurple from "assets/blockiePurple.png";

class ListItemRecursive extends  Component {

  render() {
    return (
    <Flex
      button
      noBorder
      onPress={() => this.props.navigation.navigate(this.props.route)}
      style={{flexWrap:"wrap"}}
      key={this.props.keys}
    >
    <Left>
      <Icon
        active
        name={this.props.icon}
        style={{ color: "#777", fontSize: 26, width: 30 }}
      />
      <Text style={styles.text}>
        {this.props.name}
      </Text>
    </Left>
    {this.props.types &&
      <Right style={{ flex: 1 }}>
        <Badge
          style={{
            borderRadius: 3,
            height: 25,
            width: 72,
            backgroundColor: this.props.bg
          }}
        >
          <Text
            style={styles.badgeText}
          >{`${this.props.types} Types`}</Text>
        </Badge>
      </Right>}
    </Flex>
    )
}
}

class ListItemParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  render() {
    return (
      <ListItem
          button
          noBorder
          style={{flexWrap:"wrap"}}
        >
          <Flex width={"100%"} >
          <Left
            onPress={() => this.props.navigation.navigate(this.props.route)}
          >
            <Icon
              active
              name={this.props.icon}
              style={{ color: "#777", fontSize: 26, width: 30 }}
              onPress={() => this.props.navigation.navigate(this.props.route)}
            />
            <Text 
              onPress={() => this.props.navigation.navigate(this.props.route)}
              style={styles.text}>
              {this.props.name}
            </Text>
          </Left>
          {this.props.children &&
            <Right style={{ flex: 1 }}>
              <Icon
                active
                name={"ios-add"}
                style={{ color: "#777", fontSize: 22, width: 20 }}
                onPress={() => this.setState({expand: !this.state.expand})}
              />
            </Right>}
          {this.props.types &&
            <Right style={{ flex: 1 }}>
              <Badge
                style={{
                  borderRadius: 3,
                  height: 25,
                  width: 72,
                  backgroundColor: this.props.bg
                }}
              >
                <Text
                  style={styles.badgeText}
                >{`${this.props.types} Types`}</Text>
              </Badge>
            </Right>}
          </Flex>
          {this.props.children && this.state.expand &&
          // <List
          // this.propsArray={this.propss}
          // renderRow={item =>  <ListItemRecursive navigation={this.props.navigation} {...item}/>}

          //   />

          <Flex direction="column" style={{backgroundColor:"#f1f1f1", padding: 10, width: "100%"}} >
            {this.props.children.map(item  => <ListItemRecursive key={item.keys} navigation={this.props.navigation} {...item}/>)}
          </Flex>
          }
        </ListItem>
    )
  }
    
}

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
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
          <List
            dataArray={datas}
            style={{padding: 0,}}
            renderRow={data => <ListItemParent navigation={this.props.navigation} {...data}/>}
          />
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

export default SideBar;
