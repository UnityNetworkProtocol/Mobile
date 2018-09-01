/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { View } from "react-native";
import {
  Content,
  Header,
  Button,
  Icon,
  Text,
  Item,
  Input,
} from "native-base";
/* --- Local Dependencies ---*/
import AccountSettings from "interface/fields/AccountSettings";
/* --- Component ---*/
export default class TabOne extends Component {
  render() {
    return (
      <Content>
        <View style={{padding: 10}} >
          <AccountSettings/>
        </View>
      </Content>
    );
  }
}
