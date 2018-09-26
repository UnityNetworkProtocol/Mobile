/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import {
  Button,
  Container,
  Content,
  Text,
  View,
} from "native-base";

import { 
  Flex
} from "native-base";

/* --- Internal Dependencies ---*/
import HeaderStandard from "interface/components/general/HeaderStandard";
import StateChannelCard from "interface/containers/stateChannels/StateChannelCard";
import StateChannelCreateModal from "interface/containers/stateChannels/StateChannelCreateModal";
import ERC20Create from "interface/containers/tokens/ERC20Create";

/* --- Component Dependencies ---*/
import styles from "./styles";
import bgInverse from "src/assets/images/bgInverse.jpg";


const Quests = [
  {
    name: "Friend Network",
    tagline: "Join the Festivities",
    description: "Easily transfer money between friends.",
    tokenReward: 10,
    tokenClaimed: 140,
    tokenSupply: 1000,
  },
  {
    name: "Gitcoin Subscription",
    tagline: "Monthly Recurring Payments",
    description: "Monthly Payments from a Subscription service.",
    tokenReward: 10,
    tokenClaimed: 140,
    tokenSupply: 1000,
  },
  {
    name: "Moloch Subscription",
    tagline: "Weekly Recurring Payments",
    description: ".",
    tokenReward: 10,
    tokenClaimed: 140,
    tokenSupply: 1000,
  },
];

/*--- React Component --- */
export default class Locator extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <HeaderStandard title="State Channels" />
        <ImageBackground source={bgInverse} style={styles.imageContainer}>
          <Text style={{color: "#FFF", fontSize: 22}} >State Channels</Text>
          <Text style={{color: "#FFF"}} note>Peer-to-Peer Connections</Text>
        </ImageBackground>
        <Container>
          <StateChannelCreateModal/>
          <Content style={{padding: 15}} >
            {
              Quests.map((quest, index)=> <StateChannelCard key={index} {...quest} /> )
            }
          </Content>
        </Container>
      </Container>
    );
  }
}

