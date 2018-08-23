import React, { Component } from "react";
import { View } from "react-native";
import {
  Content,
  Header,
  Button,
  Icon,
  Text,
  Item,
  Input,
} from "native-base";

/* --- Internal Dependencies ---*/
import CardAttestation from "interface/components/CardAttestation";

/* --- Component Dependencies ---*/
import demo from "../demo";
export default class TabOne extends Component {
  render() {
    return (
      <Content>
      <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View style={{padding: 10}} >
          {demo.map(item=> <CardAttestation key={item.hash} {...item} /> )}
        </View>
      </Content>
    );
  }
}
