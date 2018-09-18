/* --- Global Dependencies ---*/
import React, {Component}  from "react";
import Modal from "react-native-modal";
/* --- Local Modules --- */
import styles from "./styles";
import AttestationModalCard from "interface/components/AttestationModalCard"
import TransactionModalCard from "interface/components/TransactionModalCard"


/*--- React Component --- */
export default props => (
<Modal
  scrollable
  isVisible={props.modalState}
  hideModalContentWhileAnimating={true}
  animationIn="slideInUp" >
    <ModalSelector
      modalData={props.modalData}
      modalToggle={props.modalToggle}
    />
  </Modal>
);

const ModalSelector = ({modalData, modalToggle}) => {
  switch (modalData) {
    case "identity":
      return <AttestationModalCard
        modalData={modalData}
        modalToggle={modalToggle}/>;
    case "transaction":
      return <TransactionModalCard
        modalData={modalData}
        modalToggle={modalToggle}/>;
    default:
      return null;
  }
}
