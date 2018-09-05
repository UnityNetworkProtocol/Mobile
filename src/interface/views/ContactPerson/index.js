/* --- Global Dependencies ---*/
import React from "react";
import { Image} from "react-native";
import {
  Container,
} from "native-base";
/* --- Local Dependencies ---*/
import {
  Flex,
  Text
} from "atomic";
import HeaderStandard from "interface/components/HeaderStandard";

export default props =>
<Container>
  <HeaderStandard title="Kames Cox..."/>
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
</Container>;

