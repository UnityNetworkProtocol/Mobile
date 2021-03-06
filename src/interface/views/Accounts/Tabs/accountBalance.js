/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { View } from "react-native";
import {
  Content,
} from "native-base";

/* --- Local Dependencies ---*/
import AccountDetails from "interface/components/account/AccountDetails";
import LogoGitcoin from "assets/logoGitcoin.jpg";
import logoBountiesNetwork from "assets/logoBountiesNetwork.jpg";
import LogoGnosis from "assets/logoGnosis.png";
import LogoGovernX from "assets/logoGovernX.png";
import LogoAugur from "assets/logoAugur.png";

// Blockies
import blockiePurple from "assets/blockiePurple.png";
import blockieGreen from "assets/blockieGreen.png";
import blockieYellow from "assets/blockieYellow.png";

// Background
const Gradients = {
  aquasplash: ["#13547a","#80d0c7"], // Bluish
  ladylips: ["#ff9a9e", "#fecfef"], // Pinkish
  kashmir: ["#614385","#516395"], // Purpleush
  plumplate: ["#667eea", "#764ba2"],
  plumbrass: ["#9d5f8e", "#5f2952"], // Augur Gradient
  wiretap: [ "#8a2387", "#e94057", "#f27121"] // PuplrOrangy
};


import Wallets from "interface/containers/Wallets";

/* --- React Component ---*/
export default class TabOne extends Component {
  render() {
    return (
      <Content>
        <View style={{padding: 10}} >
        <Wallets/>
          {/* <AccountDetails
            category="Primary"
            blockie={blockiePurple}
            // bg={bgUniverse}
            interactions={[
              {
                address: "0xgit",
                logo: LogoGitcoin
              },
              {
                address: "0xbounty",
                logo: logoBountiesNetwork
              }
            ]}
            balanceEth={4.20}
            balanceTokens={4}
            transactionsCount={127}
            balanceCurrency={5201}
            gradient={["#6832a2", "#4e3df5"]}
            />
          <AccountDetails
            blockie={blockieGreen}
            category="Secondary"
            interactions={[
              {
                address: "0xgit",
                logo: LogoGovernX
              },
            ]}
            balanceEth={1.72}
            balanceTokens={4}
            transactionsCount={10}
            balanceCurrency={5201}
            gradient={Gradients.aquasplash}
          />
          <AccountDetails
            category="Tertiary"
            blockie={blockieYellow}
            interactions={[
              {
                address: "0xgnosis",
                logo: LogoGnosis
              },
              {
                address: "0xaugur",
                logo: LogoAugur
              },
            ]}
            balanceEth={13.23}
            balanceTokens={154}
            transactionsCount={420}
            balanceCurrency={2201}
            gradient={Gradients.kashmir}
          /> */}
        </View>
      </Content>
    );
  }
}
