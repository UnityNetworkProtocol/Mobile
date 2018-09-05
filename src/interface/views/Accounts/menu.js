/* --- External Modules --- */
import React, { Component } from "react";
import {
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
        <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
          <Icon active={this.state.tab1} name="keypad" />
          <Text>Balances</Text>
        </Button>
        <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
          <Icon active={this.state.tab2} name="md-locate" />
          <Text>Transactions</Text>
        </Button>
        <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
          <Icon active={this.state.tab3} name="swap" />
          <Text>Interactions</Text>
        </Button>
      </FooterTab>
    );
  }
}
