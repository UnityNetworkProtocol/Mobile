/* --- Global Dependencies ---*/
import React from "react";
import Modal from "react-native-modal";
/* --- Local Modules --- */
import AttestationModalCard from "interface/components/attestation/AttestationModalCard"
import TransactionModalCard from "interface/components/transaction/TransactionModalCard"


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
