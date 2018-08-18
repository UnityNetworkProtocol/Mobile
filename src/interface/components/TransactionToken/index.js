import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Span,
  Thumbnail,
  Left,
  Middle,
  Right,
} from "native-base";
import styles from "./styles";

const status = prop => ({
  1: "success"
})

class TransactionToken extends Component {
  render() {
    return (
      <View style={styles.container} key={this.props.txHash} >
        <View style={{alignItems: "flex-start", flex: 1}} >
          <Text>
            {this.props.name}
          </Text>
        </View>
        <View style={{alignItems: "center", flex: 1}} >
          {
            
            <Button bordered full rounded small success={false} danger={true} >
            <Text>
              {this.props.status.message}
            </Text>
          </Button>
          }
        </View>
        <View style={{alignItems: "flex-end", flex: 1}} >
          <Text note>
            {this.props.value}
          </Text>
          <Text note>
            {this.props.amount} {this.props.symbol}
          </Text>
        </View>
      </View>
    );
  }
}

export default TransactionToken