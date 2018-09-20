/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import {
  Body,
  Card,
  CardItem,
  Icon,
  Text,
} from "native-base";

import { Flex } from "atomic";
import QRCode from "interface/components/qr/QRCode";

/*--- React Component --- */
export default class ModalTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  // Toggle Modal
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Icon style={{ color: "#FFF", fontSize: 18, marginRight: 10}} color="#FFF" name="ios-qr-scanner-outline" />
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible} animationIn="slideInUp" >
          <ModalRender _toggleModal={this._toggleModal} />
        </Modal>
      </View>
    );
  }
}

const ModalRender = props => 
<Card>
  {/* Card Header */}
  <CardItem bordered>
    <Body>
      <Text>Account Information</Text>
    </Body>
    <TouchableOpacity onPress={props._toggleModal}>
      <Text>Close</Text>
    </TouchableOpacity>
  </CardItem>
  <CardItem>
    <Flex align="center" justify="center" >
      <QRCode/>
    </Flex>
  </CardItem>
</Card>