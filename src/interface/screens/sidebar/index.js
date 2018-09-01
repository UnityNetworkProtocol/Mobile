import React, { Component } from "react";
import { ImageBackground} from "react-native";
import {
  H3,
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";

import { View, Flex } from "atomic";
import datas from "./menu.js";
import styles from "./style";
import bgUniverse from "src/assets/images/bgUniverse.jpg";


class ListItemRecursive extends  Component {

  render() {
    return(
    <Flex width={"100%"} >
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
    {this.props.children &&
      <Right style={{ flex: 1 }}>
        <Icon
          active
          name={"ios-add"}
          style={{ color: "#777", fontSize: 22, width: 20 }}
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
              <H3 style={styles.textLogo}>unity</H3>
              <Text style={{fontSize: 12, color: "#D8D8D8", textAlign:"center"}}>
                Universal Ethereum Wallet
              </Text>
              <Text style={{ color: "#D8D8D8", fontSize: 10, paddingTop: 15, textAlign:"center"}}>
                network: mainnet
              </Text>
              <Text style={{ color: "#D8D8D8", fontSize: 10, paddingTop: 5, textAlign:"center"}}>
                blocks: 6,166,557
              </Text>
            </View>
          </ImageBackground>

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
                style={{flexWrap:"wrap"}}
              >
                <Flex width={"100%"} >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.children &&
                  <Right style={{ flex: 1 }}>
                    <Icon
                      active
                      name={"ios-add"}
                      style={{ color: "#777", fontSize: 22, width: 20 }}
                    />
                  </Right>}
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
                </Flex>
                {data.children &&
                  <Flex style={{backgroundColor:"#f1f1f1", padding: 10, width: "100%"}} >
                    
                    {
                      data.children.map(item => <ListItemRecursive {...item}/>)
                    }
                  </Flex>
                }
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
