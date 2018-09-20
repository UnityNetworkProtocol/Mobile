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
import AttestationCard from "interface/components/attestation/AttestationCard";

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
          {demo.map(item=> <AttestationCard key={item.hash} {...item} /> )}
        </View>
      </Content>
    );
  }
}
