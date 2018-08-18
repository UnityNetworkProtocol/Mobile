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
        <Content padder style={{margin: 0, padding: 0}}>
          <Form style={{margin: 0, padding: 0}}>
            <Picker
              mode="dropdown"
              iosHeader="Select Ethereum Network"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ flex: 1 }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Primary(0xk4m3S...c0x" value="primary" />
              <Item label="Secondary Wallet" value="secondary" />
              <Item label="Tertiary Wallet" value="tertiary" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

