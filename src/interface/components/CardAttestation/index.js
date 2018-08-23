import React, { Component } from "react";
import { Image, Dimensions, Stylesheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Span,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const logo = require("assets/logo.png");
const cardImage = require("assets/drawer-cover.png");

export default class CardAttestation extends Component {
  render() {
    return (
          <Card style={styles.mb} key={this.props.meta.hash} >
          {/* Card Header */}
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>{this.props.title}</Text>
                  <Text note>Issued: {this.props.meta.issued}</Text>
                  <Text note>Expired: {this.props.meta.expire}</Text>
                </Body>
              </Left>
            </CardItem>

            {/* Card Body/Claim */}
            <CardItem bordered>
              <Body>
                <Title style={{
                  color:"#00CE9F",
                  marginBottom: 10,
                }}>
                  Claim Information
                </Title>
                {
                  Object.keys(this.props.claim).map((key, i) =>
                    <Text key={i} >
                      <Text style={{
                        fontWeight: "bold"
                      }}>{this.props.claimMeta[key].title}</Text>: {this.props.claim[key]}
                    </Text>
                  )
                }
                <Text note style={{
                  marginTop: 12
                }}>
                  {this.props.content.description}
                </Text>
              </Body>
            </CardItem>

            {/* Card Footer */}
            <CardItem style={{direction: "column",paddingVertical: 0}}>
  
                <Left style={{width:0.5}} >
                  <Button transparent>
                    <Text>{this.props.anchor.name}</Text>
                  </Button>
                </Left>
                <Right style={{width:0.5}} >
                  <Button transparent>
                    <Text> {this.props.meta.shares || 0} Shares</Text>
                  </Button>
                </Right>
            </CardItem>

            <CardItem style={{direction: "column", paddingVertical: 0}}>
              <Text note style={{
              }}>Signer: {this.props.anchor.signature}</Text>
            </CardItem>
          </Card>
    );
  }
};

