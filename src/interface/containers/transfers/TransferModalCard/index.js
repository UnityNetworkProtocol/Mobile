/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { compose, lifecycle, withState } from "recompose";
import { Toast } from "native-base";
/* --- Local Dependencies --- */
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromEthers } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* --- React Container --- */
/* -- Redux -- */
const mapStateToProps = (state, props) => ({
  // tx: fromWallets.getDelta(state, 'wallet|sign|tx'),
  nonce: state.wallets[state.tracer.activeAccount].nonce,
  sign: fromEthers.getDelta(state, `wallet|sign|${props.modalData.address}|${state.wallets[state.tracer.activeAccount].nonce}`),
});


const mapDispatchToProps = (dispatch, props) => ({
  walletSign: (nonce)=>dispatch(ethers.walletSign(REQUEST)(
    {
      ethAddress: props.modalData.address,
      ethAmount: props.modalData.value
    },
    {
      delta: `wallet|sign|${props.modalData.address}|${nonce}`,
      type: 'transaction',
      network: 'rinkeby'
    },
  )),
});

/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
  {
    componentDidMount()
    {

    },
    componentDidUpdate(prevProps)
    {
      /**
       * IF the TX was succesfully submitted
       * DISABLE the transaction card modal
       * AND navigate to the TX hash view
       */
      if (this.props.sign.status) {

        // Disable to Modal
        this.props.modalToggle();

        /**
         * DISPLAY a toast message commuicating to users the transaction has been submitted.
         * @todo (@kamescg) Might not be required because we send users to the TransHash view.
         */
        Toast.show({
          text: "Transaction Submitted Success" || "",
          buttonText: "OK" || "",
          duration: this.props.toastDuration || 6000,
          type: this.props.toastType || "success"
        });

        /**
         * NAVIGATE to the the TransactionHash View.
         * PASS the transaction hash so the next component can lookup the transaction
         * receipt and display relevant information to the user.
         * 
         * @todo (@kamescg) Create a more descriptive View. Protip build products for Users.
         */
        this.props.navigation.navigate("TransactionHash", {transaction: this.props.sign.output});
      }

      /**
       * IF the transaction failed (internet, insuffucient funds, etc...)
       * CLOSE the Modal AND activate the QRScanner
       * AND display a Toast message with the a user friendly ERROR code.
       */
      if (this.props.sign.status === false) {
        this.props.modalToggle();
        this.props.transactionStatusToggle(toggle=>!toggle);
        Toast.show({ 
          text: `Transaction Fail: ${ErrorMessagesTranslated[this.props.sign.data.error]}` || "",
          buttonText: "OK" || "",
          duration: this.props.toastDuration || 6000,
          type: ErrorMessagesType[this.props.sign.data.error] || "danger"
        });
      }
    }
  });


const ErrorMessagesTranslated = {
  "invalid json response": "Internet Connection",
  "insufficient funds for gas * price + value": "Insufficient Funes."
}  

const ErrorMessagesType = {
  "invalid json response": "danger",
  "insufficient funds for gas * price + value": "warning"
}  

const TransactionMonitor = withState(
  "transactionStatus",
  "transactionStatusToggle",
  false
)

/* --- Export --- */
export default withNavigation(compose(
  connect(mapStateToProps, mapDispatchToProps),
  TransactionMonitor,
  QueryLifecycle
)(Component));
