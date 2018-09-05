/* --- External Modules --- */
import React, { Component } from "react";
import {
  Badge,
  Button,
  FooterTab,
  Text,
  Icon
} from "native-base";

/* --- React Component --- */
export default class IconFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <FooterTab>
        <Button
          active={this.state.tab1}
          onPress={() => this.toggleTab1()}
          vertical
          badge
        >
          <Badge>
            <Text>2</Text>
          </Badge>
          <Icon active={this.state.tab1} name="apps" />
          <Text>Verified</Text>
        </Button>
        <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
          <Icon active={this.state.tab2} name="person" />
          <Text>Self</Text>
        </Button>
        <Button
          active={this.state.tab3}
          onPress={() => this.toggleTab3()}
          vertical
          badge
        >
          <Badge style={{ backgroundColor: "green" }}>
            <Text>4</Text>
          </Badge>
          <Icon active={this.state.tab3} name="compass" />
          <Text>Incoming</Text>
        </Button>
        <Button active={this.state.tab4} onPress={() => this.toggleTab4()}
          vertical
          badge
        >
          <Badge style={{ backgroundColor: "red" }}>
            <Text>2</Text>
          </Badge>
          <Icon active={this.state.tab4} name="contact" />
          <Text>Requests</Text>
        </Button>
      </FooterTab>
    );
  }
}
