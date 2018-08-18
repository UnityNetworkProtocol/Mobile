/* --- Global Modules --- */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import QRCodeScanner from "react-native-qrcode-scanner";
// import { WalletConnector } from 'walletconnect';
// import RNWalletConnect from "rn-walletconnect-wallet";

/* --- React Component --- */
class ScanScreen extends Component {
  onSuccess(e) {
    // console.error(e)
    // set session
    const data = JSON.parse(e.data);
    console.log(data);
    const { sessionId, sharedKey } = data;
    // const walletConnector = new RNWalletConnect(
    //   {
    //     bridgeUrl: "https://bridge.walletconnect.org", 
    //     sessionId: sessionId,
    //     sharedKey: sharedKey,
    //     dappName: "Eidenai"
    //   }
    // )
    // const walletConnector = new WalletConnector(
    //   "https://bridge.walletconnect.org",
    //   {
    //     sessionId,
    //     sharedKey,
    //     dappName: 'Walletconnect test'
    //   }
    // );

    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error has occured', err));
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
            <Text style={styles.buttonText}>To Start Ethereum Transaction</Text>
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
