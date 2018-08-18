import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
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

import datas from "./menu.js";
import styles from "./style";
import bgUniverse from "src/assets/images/bgUniverse.jpg";

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
              <H3 style={styles.textLogo}>eidenai</H3>
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
              >
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
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
