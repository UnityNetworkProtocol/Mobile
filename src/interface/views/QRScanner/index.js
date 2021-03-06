/* --- Global Modules --- */
import React from "react";
import { compose, lifecycle, withStateHandlers, withHandlers } from "recompose";
import { TouchableOpacity} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
// Native Base
import {
  Container,
} from "native-base";

/* --- Local Modules --- */
import styles from "./styles";
import QRParse from "helpers/QRparse";
import debug from "helpers/debugger";
// Components 
import QRScannerModalSelector from "interface/components/modal/QRScannerModalSelector";

// Atomic
import {
  Text,
} from "atomic";


/*---* State Handlers *---*/
const modalState = withStateHandlers(
  ({ dialogState = false }) => ({
    modalData: null,
    modalState: dialogState,
  }),
    {
    modalToggle: (props) => (value) => {
      // If the Modal is closing reactivate the QRScannerObject to scan QR codes.
      props.modalState ? props.QRScannerObject.reactivate() : null;
      return {modalState: !props.modalState}
    },
    // Enable the Modal and pass in QRCode type/data to child component.
    modalUpdate: (props) => (value) => ({
      modalState: true,
      modalData: value
    }),
    // Create a QRScannerObject to access within our stateless component.
    modalHandler: (props) => (value) => ({
      QRScannerObject: value,
    }),
  }
);

/*---* Modal Handlers *---*/
const modalHandlers = withHandlers({
  onRead: props => event => {
    try {
      props.modalHandler(this.QRCodeScanner); // Create the QRScannerObject
      const data = QRParse(event);
      console.log(data)
      data.then(r=>props.modalUpdate(r))
      props.modalUpdate(data); // Extract type/data from QRCode
    } catch (err) {
      debug(err);
      setTimeout(() => {
        this.QRCodeScanner.reactivate();
      }, 10000);
    }
  },
});

/* --- React Component --- */
const ScanScreen = props => (
<Container>
  <QRCodeScanner
    ref={ref => (this.QRCodeScanner = ref)}
    onRead={props.onRead.bind(this)}
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
    !props.modalState ? null :
    <QRScannerModalSelector
      modalData={props.modalData}
      modalState={props.modalState}
      modalToggle={props.modalToggle}
    />
  }

</Container>);


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

// export default ScanScreen;
export default compose(
  modalState,
  modalHandlers,
  QueryLifecycle,
)(ScanScreen);
