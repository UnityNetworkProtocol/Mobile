/* --- Global Dependencies ---*/
import firebase from "react-native-firebase";
import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Footer,
} from "native-base";

/* --- Local Dependencies ---*/
import HeaderStandard from "interface/components/HeaderStandard";

/* --- Component Dependencies ---*/
import styles from "./styles";
import AccountTabs from "./Tabs";

/*--- React Component --- */
export default class Settings extends Component {

  componentDidMount() {
    // firebase.auth()
    // .signInAnonymouslyAndRetrieveData()
    // .then(credential => {
    //   if (credential) {
    //     console.log('default app user ->', credential.user.toJSON());
    //   }
    // });
    const fb = firebase.initializeApp(this);
    console.log(fb)
    // console.log(firebase.apps())

}

  render() {
    return (
      <Container style={styles.container}>
        <HeaderStandard title="Accounts" {...this.props} style={{zIndex: 1000, position: "relative"}}  />
        <AccountTabs style={{zIndex: 500, position: "relative"}}/>
        {firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
      </Container>
    );
  }
}

