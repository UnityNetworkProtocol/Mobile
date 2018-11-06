/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Container,
  Content,
  Text,
  View,
} from "native-base";

import {
  Flex
} from 'atomic';

/* --- Component Dependencies ---*/
import styles from "./styles";
import bgInverse from "src/assets/images/bgInverse.jpg";
import tokenQuest from "src/assets/images/tokenQuest.png";
import avatarDemo from "src/assets/images/avatarDemo.jpg";

/*--- React Component --- */
export default class Locator extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={this.props.gradient || ["#6832a2", "#4e3df5"]}
          style={styles.linearGradient}
          >
          <Flex align="center" style={{paddingBottom: 15}} >
            <Flex align="center" direction="column" style={{marginRight: 25}} >
              <Image source={avatarDemo} style={styles.avatar} />
            </Flex>
            <Flex direction="column" style={{paddingVertical: 15}} >
              <Text style={{color: "#FFF", fontSize: 18}}>Kames Geraghty</Text>
              <Text style={{color: "#FFF", fontSize: 12}}>Buidler of The Future</Text>
              <Text style={{color: "#FFF", fontSize: 10}}>kames.unity.eth</Text>
            </Flex>
          </Flex>
        </LinearGradient>
        <Container>
          <Content style={{padding: 15}} >
            <Text>
              Kames
            </Text>
          </Content>
        </Container>
      </Container>
    );
  }
}

