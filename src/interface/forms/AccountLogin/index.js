import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Container,
  Content,
  Button,
  Item,
  Label,
  Input,
  Form,
  Text
} from "native-base";
import styles from "./styles";

class AccountLogin extends Component {
  render() {
    return (
        <Content style={styles.container}>
          <Form>
            <Item inlineLabel last>
              <Input placeholder="Password" placeholderTextColor={"#FFF"} style={{color:"#FFF", }} secureTextEntry />
            </Item>
          </Form>

          <Button 
            block 
            style={{ margin: 15, marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("AccountOverview",
            {
              account: "0x43kf55ab17f"
            })}
            >
            <Text>Unlock Account</Text>
          </Button>
        </Content>
    );
  }
}

export default withNavigation(AccountLogin);
