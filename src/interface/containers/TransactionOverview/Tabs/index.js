import React, { Component } from "react";
import {
  Container,
  Icon,
  Tabs,
  Tab,
  Text,

  TabHeading
} from "native-base";
import AccountBalance from "./accountBalance";
import AccountInteractions from "./accountInteractions";
import AccountTransactions from "./accountTransactions";

class ConfigTab extends Component {
  render() {
    return (
      <Container>
        <Tabs style={{ elevation: 3 }} tabBarPosition="bottom">
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="apps" />
                <Text style={{fontSize: 10}}>Activity</Text>
              </TabHeading>
            }
          >
            <AccountBalance {...this.props} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="swap" />
                <Text style={{fontSize: 10}}>Settings</Text>
              </TabHeading>
            }
          >
            <AccountTransactions />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="md-locate" />
                <Text style={{fontSize: 10}}>Backup</Text>
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
