/* --- Global Modules --- */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import qrVerify from "./qrVerify";

/* --- React Component --- */
class ScanScreen extends Component {
  onSuccess(e) {
    try {
      qrVerify(e);
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
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 35,
    color: "#777",
    textAlign: "center"
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center"
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
