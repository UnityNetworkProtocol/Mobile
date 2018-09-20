/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { View } from "react-native";
import {
  Content
} from "native-base";

/* --- Local Dependencies ---*/
import AccountDetails from "interface/components/account/AccountDetails";
import LogoGitcoin from "assets/logoGitcoin.jpg";
import LogoGovernX from "assets/logoGovernX.png";
import LogoAugur from "assets/logoAugur.png";

const Gradients = {
  aquasplash: ["#13547a","#80d0c7"], // Bluish
  ladylips: ["#ff9a9e", "#fecfef"], // Pinkish
  kashmir: ["#614385","#516395"], // Purpleush
  plumplate: ["#667eea", "#764ba2"],
  plumbrass: ["#9d5f8e", "#5f2952"], // Augur Gradient
  wiretap: [ "#8a2387", "#e94057", "#f27121"] // PuplrOrangy
}

/* --- Component Dependencies ---*/
import DemoTransactions from '../demoTransactions'
export default class TabOne extends Component {
  render() {
    return (
      <Content>
        <View style={{padding: 10}} >
          <AccountDetails 
            category="Bounties"
            logo={LogoGitcoin}
            balanceEth={4.23}
            balanceTokens={4}
            transactionsCount={10}
            balanceCurrency={5201}
            gradient={["#6832a2", "#4e3df5"]}
            />
          <AccountDetails
            logo={LogoGovernX}
            category="Governance"
            balanceEth={4.23}
            balanceTokens={4}
            transactionsCount={10}
            balanceCurrency={5201}
            gradient={Gradients.aquasplash}
          />
          <AccountDetails
            logo={LogoAugur}
            category="Predictions"
            balanceEth={13.23}
            balanceTokens={154}
            transactionsCount={420}
            balanceCurrency={2201}
            gradient={Gradients.plumbrass}
          />
          {/* {DemoTransactions.map((item, index)=><TransactionToken key={index} {...item} />)} */}
        </View>
      </Content>
    );
  }
}
