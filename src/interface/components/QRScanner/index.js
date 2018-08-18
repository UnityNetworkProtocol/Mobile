import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
// import { WalletConnector } from 'walletconnect';
import RNWalletConnect from "rn-walletconnect-wallet"

import QRCodeScanner from "react-native-qrcode-scanner";

class ScanScreen extends Component {
  onSuccess = async (e) => {
    // console.error(e)
    // set session
    const data = JSON.parse(e.data);
    console.log(data);
    const { sessionId, sharedKey } = data;
    const walletConnector = new RNWalletConnect(
      {
        bridgeUrl: "https://bridge.walletconnect.org", 
        sessionId: sessionId,
        sharedKey: sharedKey,
        dappName: "Eidenai"
      }
    );

    /**
     *  Send session data
    */
   try{
    walletConnector.sendSessionStatus({
      fcmToken: '12354...3adc',
      pushEndpoint: 'https://push.walletconnect.org/notification/new',  
      data: {
        accounts: [
          '0x0000000000000000000000000000000000000000'
        ]
      }
    })
    // sending session data
    await walletConnector.sendSessionStatus({
      fcmToken: '1234', // TODO use real fcm token
      walletWebhook: 'https://bridge.walletconnect.org/notification/new',
      data: {
        address: '0x123' // TODO use real address :)
      }
    });

      // success alert
      Alert.alert('Connected', 'Successfully connected with app');
    } catch (e) {
      console.log(e);

        // success alert
        Alert.alert('Failed', 'Connection with app failed. Please try again.');
      }
    }
    
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
            Scan QR Code to initialize Ethereum Transactions
          </Text>
        }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
