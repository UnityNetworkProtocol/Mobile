import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, View } from "react-native";
import {
  Button,
  Text,
} from "native-base";
import styles from "./styles";
import {
  Flex,
} from "atomic";

const status = prop => ({
  1: "success"
})

class TransactionToken extends Component {
  render() {
    return (
      <View 
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
      </View>
    );
  }
}

export default withNavigation(TransactionToken)