/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Text,
  View,
} from "native-base";

/* --- Internal Dependencies ---*/
import HeaderStandard from "interface/components/general/HeaderStandard";
import QuestCard from "interface/components/quest/QuestCard";

/* --- Component Dependencies ---*/
import styles from "./styles";
import bgInverse from "src/assets/images/bgInverse.jpg";
import tokenQuest from "src/assets/images/tokenQuest.png";


const Quests = [
  {
    name: "Bard Party",
    tagline: "Join the Festivities",
    description: "Nam faucibus augue nisi, sit amet accumsan arcu porttitor sed. Vestibulum et quam in leo dignissim molestie at sed tellus. Vivamus nec mauris eget quam sagittis faucibus a vitae elit. Nunc dictum id nunc nec placerat.",
    tokenReward: 10,
    tokenClaimed: 140,
    tokenSupply: 1000,
  },
  {
    name: "Warriors Gauntlet",
    tagline: "Prove Your Valor",
    description: "Nam faucibus augue nisi, sit amet accumsan arcu porttitor sed. Vestibulum et quam in leo dignissim molestie at sed tellus. Vivamus nec mauris eget quam sagittis faucibus a vitae elit. Nunc dictum id nunc nec placerat.",
    tokenReward: 10,
    tokenClaimed: 140,
    tokenSupply: 1000,
  },
];

const ModalInformation = props =>(
<View style={{padding: 15}} >
  <Text>Join The Adventure</Text>
  <Text note>Nam faucibus augue nisi, sit amet accumsan arcu porttitor sed. Vestibulum et quam in leo dignissim molestie at sed tellus. Vivamus nec mauris eget quam sagittis faucibus a vitae elit. Nunc dictum id nunc nec placerat.</Text>
</View>
)

/*--- React Component --- */
export default class Locator extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <HeaderStandard title="TokenQuest" />
        <ImageBackground source={bgInverse} style={styles.imageContainer}>
          <Image width={35} height={35} source={tokenQuest} style={{width: 35, height: 35}} />
          <Text style={{color: "#FFF", fontSize: 22}} >TokenQuest</Text>
          <Text style={{color: "#FFF"}} note>Explore The Wilderness</Text>
        </ImageBackground>
        <Container>
          <Content style={{padding: 15}} >
            {
              Quests.map((quest, index)=> <QuestCard key={index} {...quest} /> )
            }
          </Content>
        </Container>
      </Container>
    );
  }
}

