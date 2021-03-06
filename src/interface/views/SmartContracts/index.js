/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Footer,
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/general/HeaderStandard";
import TransactionToken from "interface/components/transaction/TransactionToken";
import AccountSelect from "interface/fields/AccountSelect";

/* --- Component Dependencies ---*/
import styles from "./styles";
import FooterTabMenu from './menu.js'
import DemoTransactions from './demoTransactions'
import bgUniverse from "src/assets/images/bgUniverse.jpg";
import AccountTabs from "./Tabs";

/*--- React Component --- */
export default class Settings extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderStandard title="Accounts" {...this.props} />

        <ImageBackground source={bgUniverse} style={styles.imageContainer}>
          <Text style={{ color: '#FFF', fontSize: 10 }}>Account: 0xkAmE5....G3r</Text>
          {/* <View>
            <AccountSelect/>
          </View> */}
        </ImageBackground>
        <AccountTabs/>
      </Container>
    );
  }
}

