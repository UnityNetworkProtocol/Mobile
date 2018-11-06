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

import TransactionHash from "interface/containers/transactions/TransactionHash"

/* --- Component Dependencies ---*/
import styles from "./styles";
import bgInverse from "src/assets/images/bgInverse.jpg";
import tokenQuest from "src/assets/images/tokenQuest.png";

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
      <HeaderStandard title="Transaction" />
        <Container>
          <Content style={{padding: 15}} >
          <TransactionHash transaction={this.props.navigation.state.params.transaction} />
          </Content>
        </Container>
      </Container>
    );
  }
}

