/* --- Global Dependencies ---*/
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem
} from "native-base";

import {
  Flex,
  Icon,
  Text,
  View,
} from "atomic";
// Assets
import styles from "./styles";
import avatarDemo from "assets/images/avatarDemo.jpg";
import tokenQuest from "assets/images/tokenQuest.png";
/* --- Component ---*/
export default props =>
<TouchableOpacity>
<Card style={styles.card} >
  <CardItem bordered>
    <Flex align="center" >
      <Flex direction="column" justify="center" width={"70%"} >
        <Text style={styles.textName}>{props.name}</Text>
        <Text style={styles.textAccount}>{props.tagline}</Text>
      </Flex>
      <Flex align="center" justify="flex-end" width={"30%"} style={{position: "relative"}}  >
        <Image style={styles.avatar} source={tokenQuest}/>
      </Flex>
    </Flex>
  </CardItem>
  <CardItem bordered>
    <Text>{props.description || ""}</Text>
  </CardItem>
  <Flex justify="space-between" style={{marginTop: 20, paddingHorizontal: 15}} >
    <Flex direction="column" align="center" justify="center" >
      <Text>{props.tokenReward || 0}</Text>
      <Text note>Reward</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex>
        <Text>{props.tokenClaimed || 0}</Text>
      </Flex>
      <Text note>Claimed</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex>
        <Text>{props.tokenSupply || 0}</Text>
      </Flex>
      <Text note>Supply</Text>
    </Flex>
  </Flex>
</Card>
</TouchableOpacity>