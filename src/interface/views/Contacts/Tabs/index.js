import React, { Component } from "react";
import {
  Container,
  Icon,
  Tabs,
  Tab,
  Text,

  TabHeading
} from "native-base";
import ContactList from "./accountBalance";
import AccountInteractions from "./accountInteractions";
import AccountTransactions from "./accountTransactions";

class ConfigTab extends Component {
  render() {
    return (
      <Container>
        <Tabs style={{ elevation: 4 }} tabBarPosition="bottom">
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="apps" />
                <Text style={{fontSize: 10}}>Friends</Text>
              </TabHeading>
            }
          >
            <ContactList />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="swap" />
                <Text style={{fontSize: 10}}>Businesses</Text>
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
