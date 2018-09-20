/* --- Global Modules --- */
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, View, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
} from "native-base";
/* --- Local Modules --- */
import {
  Flex,
} from "atomic";
/* --- Component Files --- */
import styles from "./styles";

class TransactionToken extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        key={this.props.txHash}
        onPress={() => this.props.navigation.navigate("TransactionOverview", {
          transaction: this.props.txHash
        })} >
          <Flex style={{alignItems: "center", flex: 1}}
          onPress={() => this.props.navigation.navigate("TransactionOverview", {
            transaction: this.props.txHash
          })} >
          <Image style={{height: 25, width: 25, marginRight: 5}} source={this.props.logo}/>
            <Text style={{fontSize: 10}} >
              {this.props.name}
            </Text>
          </Flex>
        <View style={{alignItems: "center", flex: 1}} >
            <Button
              bordered full rounded small success={false} danger={true} 
              onPress={() => this.props.navigation.navigate("TransactionOverview", {
                transaction: this.props.txHash
              })}
            >
            <Text>
              {this.props.status.message}
            </Text>
          </Button>
        </View>
        <View style={{alignItems: "flex-end", flex: 1}} >
          <Text note>
            {this.props.value}
          </Text>
          <Text note>
            {this.props.amount} {this.props.symbol}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(TransactionToken);
