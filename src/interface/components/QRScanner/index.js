import React, { Component } from "react";
import {
  StyleSheet,
  Text,
} from 'react-native';
import RNWalletConnect from "rn-walletconnect-wallet";
import QRCodeScanner from "react-native-qrcode-scanner";

/* --- React Component --- */
class ScanScreen extends Component {
  onSuccess = async (e) => {
    // console.error(e)
    // set session
    const data = JSON.parse(e.data);
    console.log(data);
    const { sessionId, sharedKey, dappName, domain } = data;
    console.log(sessionId);
    const walletConnector = new RNWalletConnect(
      {
        bridgeUrl: domain, 
        sessionId: sessionId,
        sharedKey: sharedKey,
        dappName: dappName
      }
    );

    // setTimeout(() => {
    //   this.qrCodeScanner.reactivate();
    // }, 1000);

    /**
     *  Send session data
    */
   try {

    console.log('sending session')
    walletConnector.sendSessionStatus({
      pushEndpoint: 'https://walletconnect.balance.io/webhook/push-notify',  
      data: {
        address:'0x80e3e96dbc68416be9d82dee3999f0f738a5252a',
        personalData: {
          name: "KamesCG"
        }
      }
    });

    // sending session data
    const status =  await walletConnector.sendSessionStatus({
      fcmToken: '1234', // TODO use real fcm token
      walletWebhook: 'https://bridge.walletconnect.org/notification/new',
      data: {
        address: '0x123' // TODO use real address :)
      }
    });

    console.log(status)

      // success alert
      // Alert.alert('Connected', 'Successfully connected with app');
    } catch (err) {
      console.log(err);

        // success alert
        // Alert.alert('Failed', 'Connection with app failed. Please try again.');
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
