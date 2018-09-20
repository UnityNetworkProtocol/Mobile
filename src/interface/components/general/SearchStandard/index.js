/* --- Global Dependencies ---*/
import React, { Component } from "react";
import {
  Header,
  Button,
  Icon,
  Item,
  Text,
  Input
} from "native-base";

/* --- Component Dependencies ---*/
export default class SearchStandard extends Component {
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon active name="search" />
          <Input placeholder="Search" />
          <Icon active name="map" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
    </Header>
    );
  }
}

