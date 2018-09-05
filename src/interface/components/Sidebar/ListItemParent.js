import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
  Text,
  Right,
  Badge
} from "native-base";

import { Icon, Flex} from "atomic";

import ListItemChild from "./ListItemChild";
import styles from "./style";

export default class ListItemParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  render() {
    return (
      <Flex
          button
          noIndent
          noBorder
          style={{flexWrap:"wrap", marginBottom: 10}}
        >
          <Flex width={"100%"} style={{padding: 10}} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.route)}>
            <Flex>
              <Icon
                name={this.props.icon}
                style={{ color: "#777", fontSize: 26, width: 30 }}
              />
              <Text
                style={styles.text}>
                {this.props.name}
              </Text>
            </Flex>
          </TouchableOpacity>
          {this.props.children &&
            <Right style={{ flex: 1 }}>
              <Icon
                active
                name={"ios-add"}
                style={{ color: "#777", fontSize: 22, width: 20 }}
                onPress={() => this.setState({expand: !this.state.expand})}
              />
            </Right>}
          {this.props.types &&
            <Right style={{ flex: 1 }}>
              <Badge
                style={{
                  borderRadius: 3,
                  height: 25,
                  width: 72,
                  backgroundColor: this.props.bg
                }}
              >
                <Text
                  style={styles.badgeText}
                >{`${this.props.types} Types`}</Text>
              </Badge>
            </Right>}
          </Flex>
          {
            this.props.children &&
            this.state.expand &&
            <Flex direction="column" style={{backgroundColor:"#f1f1f1", padding: 10, width: "100%"}} >
              {this.props.children.map(item  => <ListItemChild key={item.hash} navigation={this.props.navigation} {...item}/>)}
            </Flex>
          }
        </Flex>
    )
  }
}