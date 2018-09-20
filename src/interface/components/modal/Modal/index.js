/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import {
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

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
          <Text>Show</Text>
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
      <Text>Guide</Text>
      <Text note>Issued: Winning</Text>
      <Text note>Expired: Losting</Text>
    </Body>
    <TouchableOpacity onPress={props._toggleModal}>
      <Text>Close</Text>
    </TouchableOpacity>
  </CardItem>
</Card>