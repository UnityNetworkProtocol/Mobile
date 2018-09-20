/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Button,
  Left,
  Right,
} from "native-base";

/* --- Local Dependencies ---*/
import {
  Flex,
  Text,
  View
} from "atomic";

import Logo from "assets/logo.png";
import iconEth from "assets/iconEth.png";

/* --- React Component ---*/
export default class Settings extends Component {
  render() {
    return (
    <Content style={{padding:10}} >
      <PublicKey key="publicKey" />
      <PrivateKey key="privateKey"/>
      <MnemonicPhrase key="mnemonicPhrase"/>
    </Content>)
  }
}

// Later on in your styles..
var styles = StyleSheet.create({

});

const PublicKey = props => <Card style={{color: "white"}} >
<Flex 
  direction="column" justify="center" align="center"
  style={{paddingVertical: 15, textAlign: "center"}} >
  <Image source={Logo} style={{width: 90, height: 90}} />
  <Text style={{fontSize: 24, textAlign:"center"}} >Public Address</Text>
  <Text style={{fontSize: 14, textAlign:"center"}}>Share with Everyone</Text>
</Flex>
<Flex direction="column" style={{padding: 15}} >
<View>
  <Text>The public key can be shared with everyone. It's very similar to a public address on a map. If you know the address it's possible to visit (send cryptocurrency), not enter the home unless you've been given permission. </Text>
  <Text style={{marginTop: 10}} >In other words, it's advised to share your public address only with friends, family and businesess so they can now send cryptocurrency. Put simply it's kind of like a bank routing and account number, because everyone can send money to the location, but only you can withdraw the money. </Text>
  </View>
</Flex>
</Card>;

const PrivateKey = props => <Card style={{color: "white"}} >
<Flex 
  direction="column" justify="center" align="center"
  style={{paddingVertical: 15, textAlign: "center"}} >
  <Image source={iconEth} style={{width: 90, height: 90}} />
  <Text style={{fontSize: 24, textAlign:"center"}}>Private Key</Text>
  <Text style={{fontSize: 14, textAlign:"center"}}>Complete Control of Digital Assets</Text>
</Flex>
<Flex direction="column" style={{padding: 15}} >
  <Text>The private key shouldn't be shared with anyone. It's very similar to a public address on a map, which means only share the address with people and organizations you know and trust.</Text>
  <Text style={{marginTop: 10}} >When you share a public address with friends, and businesess they can now send cryptocurrency and other tokens to that address. Put simply it's kind of like a bank routing and account number, because everyone can send money to the location, but only you can withdraw the money </Text>
</Flex>
</Card>

const MnemonicPhrase = props => <Card style={{color: "white"}} >
<Flex 
  direction="column" justify="center" align="center"
  style={{paddingVertical: 15, textAlign: "center"}} >
  <Image source={Logo} style={{width: 90, height: 90}} />
  <Text style={{fontSize: 24, textAlign:"center"}}>Mnemonic Phrase</Text>
  <Text style={{fontSize: 14, textAlign:"center"}}>A Digital Keychain</Text>
</Flex>
<Flex direction="column" style={{padding: 15}} >
  <Text>The mnemonic phrase is like a digital keychain. Put simply, a mnemonic phrase can contain 10's or even 100's of private keys, which are used to manage different accounts.</Text>
  <Text style={{marginTop: 10}} >It's very important to never lose mnemonic phrase (or private keys), because the associated accounts will be unrecoverable.</Text>
</Flex>
</Card>