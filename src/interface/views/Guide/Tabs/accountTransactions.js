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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
/* --- Local Dependencies ---*/
import TransactionToken from "interface/components/transaction/TransactionToken";

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
