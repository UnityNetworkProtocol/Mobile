import React, { Component } from "react";
import {
  Container,
  Icon,
  Tabs,
  Tab,
  Text,

  TabHeading
} from "native-base";
import AttestionsVerified from "./attestationsVerified";
import AttestationsSelf from "./attestationsSelf";
import AttestationsRequests from "./attestationsRequests";
import AttestationsIncoming from "./attestationsIncoming";

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
            <AttestionsVerified/>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="person" />
                <Text style={{fontSize: 10}}>Self</Text>
              </TabHeading>
            }
          >
            <AttestationsSelf />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="swap" />
                <Text style={{fontSize: 10}}>Incoming</Text>
              </TabHeading>
            }
          >
            <AttestationsRequests />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{flexDirection:"column"}} >
                <Icon style={{fontSize: 22}} name="md-locate" />
                <Text style={{fontSize: 10}}>Requests</Text>
              </TabHeading>
            }
          >
            <AttestationsIncoming />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ConfigTab;
