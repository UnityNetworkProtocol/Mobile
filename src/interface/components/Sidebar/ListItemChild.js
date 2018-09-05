import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Text,
  Left,
  Right,
  Badge
} from "native-base";
import { Icon, Flex } from "atomic";
import styles from "./style";

export default props => <Flex style={{flexWrap:"wrap", marginTop: 10}} key={props.hash} >
<TouchableOpacity onPress={() => props.navigation.navigate(props.route)}>
<Left>
  <Flex>
    <Icon
      active
      name={props.icon}
      style={{ color: "#777", fontSize: 26, width: 30 }}
    />
    <Text style={styles.text}>
      {props.name}
    </Text>
  </Flex>
</Left>
{props.types &&
  <Right style={{ flex: 1 }}>
    <Badge
      style={{
        borderRadius: 3,
        height: 25,
        width: 72,
        backgroundColor: props.bg
      }}
    >
      <Text
        style={styles.badgeText}
      >{`${props.types} Types`}</Text>
    </Badge>
  </Right>}
</TouchableOpacity>
</Flex>;