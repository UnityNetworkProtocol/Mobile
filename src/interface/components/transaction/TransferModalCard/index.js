/* --- Global Dependencies --- */
import { connect } from "react-redux";
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
  sign: fromEthers.getDeltaStatus(state, `wallet|sign|${props.modalData.address}`),
});


const mapDispatchToProps = (dispatch, props) => ({
  walletSign: ()=>dispatch(ethers.walletSign(REQUEST)(
    {
      ethAddress: props.modalData.address,
      ethAmount: props.modalData.value
    },
    {
      delta: `wallet|sign|${props.modalData.address}`,
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
      if (this.props.sign) {
        this.props.modalToggle();
        Toast.show({ 
          text: "Transaction Submitted Success" || "",
          buttonText: "OK" || "",
          duration: this.props.toastDuration || 6000,
          type: this.props.toastType || "success"
        });
      }
      if (!this.props.transactionStatus) {
        this.props.modalToggle();
        this.props.transactionStatusToggle(toggle=>!toggle);
        Toast.show({ 
          text: "Transaction Fail" || "",
          buttonText: "OK" || "",
          duration: this.props.toastDuration || 6000,
          type: this.props.toastType || "danger"
        });
      }
    }
  });


const TransactionMonitor = withState(
  "transactionStatus",
  "transactionStatusToggle",
  false
)

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  TransactionMonitor,
  QueryLifecycle
)(Component);
