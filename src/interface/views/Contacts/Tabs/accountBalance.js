/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Content,
} from "native-base";

/* --- Local Dependencies ---*/
import {
  Flex,
  Text
} from "atomic";
import ContactItem from "components/contact/ContactItem";
// Demo Contant
import Contacts from "demo/data/contacts";

/* --- Component Dependencies ---*/
export default class ContactList extends Component {
  render() {
    return (
      <Content style={{backgroundColor: "#eaeaf1", padding: 10}} >
        <View>
         {Contacts.map(person => <ContactItem key={person.hash}  {...person}/>)}
        </View>
      </Content>
    );
  }
}
