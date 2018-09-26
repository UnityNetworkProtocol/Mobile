/* --- Global Modules --- */
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import {
  Container,
} from "native-base";

/* --- Local Modules --- */
import styles from "./styles";
import qrVerify from "./qrVerify";
import ProductPurchaseModal from "interface/components/ProductPurchaseModal";

import {
  Flex,
  Text,
  View
} from "atomic";

/* --- React Component --- */
class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  componentWillUpdate(props) {
    console.log(props);
    console.log(this.state);
  }

  // Toggle Modal
  _modalToggle = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  // QR Scan Success
  onSuccess(e) {
    try {
      qrVerify(e);
      this._modalToggle();
      // setTimeout(() => {
      //   this.qrCodeScanner.reactivate();
      // }, 1000);
    } catch (err) {
      setTimeout(() => {
        this.qrCodeScanner.reactivate();
      }, 1000);
    }
  }

  render() {
    return (
      <Container>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>
              Scan QR Code
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>Start Ethereum Transaction</Text>
            </TouchableOpacity>
          }
        />
      {
        !this.state.isModalVisible ? console.log(this.state.isModalVisible) :
        <ProductPurchaseModal modal={this.state.isModalVisible} modalToggle={this.state._modalToggle} />
      }
      
      </Container>
    );
  }
}

export default ScanScreen;
