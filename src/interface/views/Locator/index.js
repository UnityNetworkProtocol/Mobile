/* --- Global Dependencies ---*/
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

/* --- Internal Dependencies ---*/
import SearchStandard from "interface/components/general/SearchStandard";
import LocatorMap from "interface/components/map/LocatorMap";

/* --- Component Dependencies ---*/
import styles from "./styles";

/*--- React Component --- */
export default class Locator extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Locator</Title>
          </Body>
          <Right />
        </Header>
        <SearchStandard/>
        <Content>
          <LocatorMap/>
        </Content>


        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Mapping</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

