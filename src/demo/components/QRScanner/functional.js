/* --- Global Modules --- */
import React from "react";
import { compose, lifecycle, withState, withStateHandlers, withHandlers } from "recompose";
import { TouchableOpacity} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
// Native Base
import {
  Container,
} from "native-base";

/* --- Local Modules --- */
import styles from "./styles";
import qrVerify from "./qrVerify";
import QRScannerModalSelector from "interface/components/modal/QRScannerModalSelector";

// Atomic
import {
  Text,
} from "atomic";


/*-* State Management *-*/
const modalState = withState(
  'modal',
  'modalToggle',
  false
)

const success = withStateHandlers(
  ({ dialogState = false }) => ({
    dialog: dialogState,
  }),
  {
    dialogToggle: (props) => (value) => ({
      dialog: !props.dialog
    }),
  }
)

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {

  },
})

const buidl = withHandlers({
  onRead: props => event => {
    console.log(this)
    console.log('buidl')
    console.log(props)
    props.dialogToggle();
    qrVerify(event);
    setTimeout(() => {
      this.qrCodeScanner.reactivate();
    }, 1000);
  },
});

/* --- React Component --- */
const ScanScreen = props => 
<Container>
  <QRCodeScanner
    ref={c => {
      this.qrCodeScanner = c;
    }}
    onRead={props.onRead}
    topContent={
      <Text style={styles.centerText}>
        Scan QR Code
      </Text>
    }
    bottomContent={
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>Initialize Transaction</Text>
      </TouchableOpacity>
    }
  />
  {
    !props.dialog ? console.log(props.dialog) :
    <QRScannerModalSelector modal={props.dialog} modalToggle={props.dialogToggle} /> 
  }

</Container>;




// export default ScanScreen;
export default compose(
  modalState,
  success,
  buidl,
  // onSuccess,
  QueryLifecycle,
)(ScanScreen);