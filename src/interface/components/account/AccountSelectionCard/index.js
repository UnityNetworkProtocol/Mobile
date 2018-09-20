/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Text,
} from "native-base";

import {
  Flex,
  Icon,
  View
} from "atomic";

/* --- Local Modules --- */
import styles from "./styles";
// Assets
import avatarDemo from "assets/images/avatarDemo.jpg";

const EthAmount = props => <Flex
  align="center" justify="center"
  style={styles.viewEth}>
  <Text style={styles.textBalance}>32</Text>
  {/* <Text style={styles.textAccount}>ETH</Text> */}
</Flex>


export default props =>
<TouchableOpacity>
<Card style={styles.card} >
  <Flex align="center" >
    <Flex align="center" justify="center" width={"30%"} style={{position: "relative"}}  >
      <Image style={styles.avatar} source={avatarDemo}/>
      <EthAmount/>
    </Flex>
    <Flex direction="column" justify="center" width={"70%"} >
      <Text style={styles.textName}>{props.name}</Text>
      <Text style={styles.textAccount}>{props.address}</Text>
    </Flex>
  </Flex>
  <Flex justify="space-between" style={{marginTop: 20}} >
    <Flex direction="column" align="center" justify="center" >
      <Flex justify="space-evenly" >
        <Icon style={{color: "#484848", fontSize: 22, marginRight: 15}} name="ios-analytics-outline" />
        <Text>{props.accountChannels}</Text>
      </Flex>
      <Text note>Channels</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex>
        <Icon style={{color: "#484848", fontSize: 22, marginRight: 15}}  name="ios-cloud-circle-outline" />
        <Text>{props.accountRequests}</Text>
      </Flex>
      <Text note>Requests</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex>
        <Icon style={{color: "#484848", fontSize: 22, marginRight: 15}}  name="ios-cube-outline" />
        <Text>{props.accountNotifications}</Text>
      </Flex>
      <Text note>Notifications</Text>
    </Flex>
  </Flex>
</Card>
</TouchableOpacity>;
