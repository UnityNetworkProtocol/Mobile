/* --- Global Dependencies ---*/
import React from "react";
import { withNavigation } from "react-navigation";
import { Image, TouchableOpacity } from "react-native";
/* --- Local Dependencies ---*/
import {
  Flex,
  Text
} from "atomic";

const ContactItem = props =>
  <TouchableOpacity 
    onPress={() => props.navigation.navigate("ContactPerson")}>
    <Flex align="center" style={{backgroundColor: "#FFF", borderRadius: 10, marginBottom: 15, padding: 10}} >
      <Flex align="center" >
        <Image source={props.image} style={{borderRadius: 9999, height: 45, width: 45}} />
      </Flex>
      <Flex direction="column" style={{paddingLeft: 10}} >
        <Text>{props.name}</Text>
        <Text note>Entity: {props.entity}</Text>
        <Text note>Address: {props.address}</Text>
      </Flex>
    </Flex>
  </TouchableOpacity>;

export default withNavigation(ContactItem);

