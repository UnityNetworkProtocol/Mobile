import React, { Component } from "react";
import {
  Container,
  Content,
  Icon,
  Label,
  Picker,
  Form
} from "native-base";

import styles from "./styles";

const Item = Picker.Item;

export default class NetworkSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <Label>Wallet</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select Ethereum Network"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Primary Wallet" value="primary" />
              <Item label="Secondary Wallet" value="secondary" />
              <Item label="Tertiary Wallet" value="tertiary" />
            </Picker>

            <Label>Network</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select Ethereum Network"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Mainnet (Infura)" value="mainnet" />
              <Item label="Mainnet (MyCrypto)" value="mainnet" />
              <Item label="POA" value="poa" />
              <Item label="Rinkeby" value="rinkeby" />
              <Item label="Ropsten" value="ropsten" />
              <Item label="Kovan" value="kovan" />
            </Picker>

            <Label>Local Currency</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select Ethereum Network"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="USD" value="usd" />
              <Item label="EUR" value="eur" />
              <Item label="YEN" value="yen" />
  
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

