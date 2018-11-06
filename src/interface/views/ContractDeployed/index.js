/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import {
  Card,
  Container,
  Content,
  Text,
  View,
} from "native-base";

/* --- Internal Dependencies ---*/
import HeaderStandard from "interface/components/general/HeaderStandard";
import TransactionHashCard from "interface/containers/transactions/TransactionHashCard";
// import ContractDeployInitialized from "interface/containers/contracts/ContractDeployInitialized"

/* --- Component Dependencies ---*/
import styles from "./styles";
import bgInverse from "src/assets/images/bgInverse.jpg";
import tokenQuest from "src/assets/images/tokenQuest.png";

const ContractType = type => ({
  "ERC20": {
    title: "Creating Token",
    tagline: "Type: Fungible",
  },
  "Safe": {
    title: "Creating Safe",
    tagline: "Type: Bank",
  }
}[type]);

/*--- React Component --- */
export default class Locator extends Component {
  render() {
    const ContractMessage = ContractType(this.props.navigation.state.params.contract.type);
    return (
      <Container style={styles.container}>
      <HeaderStandard title="Transaction" />
      <ImageBackground source={bgInverse} style={styles.imageContainer}>
        <Image source={tokenQuest} style={{height: 35, width: 35}} />
        <Text style={{color:"#FFF", fontSize: 18}} >
          {ContractMessage.title}
        </Text>
        <Text style={{color:"#FFF"}} note>
          {ContractMessage.tagline}
        </Text>
      </ImageBackground>
        <Container>
          <Content style={{padding: 15}}>
            <TransactionHashCard transaction={this.props.navigation.state.params.transaction} />
          </Content>
        </Container>
      </Container>
    );
  }
}

