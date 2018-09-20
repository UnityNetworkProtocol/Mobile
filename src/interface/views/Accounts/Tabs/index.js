import React, { Component } from "react";
import {
  Container,
  Icon,
  Tabs,
  Tab,
  Text,
  View,
  TabHeading
} from "native-base";
import AccountBalance from "./accountBalance";
import AccountInteractions from "./accountInteractions";
import AccountTransactions from "./accountTransactions";
class ConfigTab extends Component {
  render() {
    return (
      <Container style={{zIndex: 100, position: "relative"}} >
        <Tabs style={{ elevation: 4 }} tabBarPosition="bottom">
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="apps" />
                <Text style={{fontSize: 10}}>Balances</Text>
              </TabHeading>
            }
          >
            <AccountBalance />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="swap" />
                <Text style={{fontSize: 10}}>Transactions</Text>
              </TabHeading>
            }
          >
            <AccountTransactions />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="md-locate" />
                <Text style={{fontSize: 10}}>Interactions</Text>
              </TabHeading>
            }
          >
            <AccountInteractions />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ConfigTab;
