/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { View } from "react-native";
import {
  Content,
} from "native-base";
import TransactionToken from "interface/components/TransactionToken";

/* --- Component Dependencies ---*/
import DemoTransactions from '../demoTransactions'
export default class TabOne extends Component {
  render() {
    return (
      <Content>
        <View style={{padding: 10}} >
          {DemoTransactions.map((item, index)=><TransactionToken key={index} {...item} />)}
        </View>
      </Content>
    );
  }
}
