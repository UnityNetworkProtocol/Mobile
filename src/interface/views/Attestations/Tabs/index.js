import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

class ConfigTab extends Component {
  render() {
    return (
      <Container>
        <Tabs style={{ elevation: 4 }} tabBarPosition="bottom">
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="apps" />
                <Text style={{fontSize: 10}}>Verified</Text>
              </TabHeading>
            }
          >
            <TabOne />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="person" />
                <Text style={{fontSize: 10}}>Self</Text>
              </TabHeading>
            }
          >
            <TabTwo />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="swap" />
                <Text style={{fontSize: 10}}>Incoming</Text>
              </TabHeading>
            }
          >
            <TabThree />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="md-locate" />
                <Text style={{fontSize: 10}}>Requests</Text>
              </TabHeading>
            }
          >
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ConfigTab;
