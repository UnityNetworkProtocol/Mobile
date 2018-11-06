/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import ethers from "interface/store/departments/blockchain/ethers/actions";
import deployed from "interface/store/departments/interface/deployed/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromEthers } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */
/* --- Store State --- */
const mapStateToProps = (state, props) => ({
  transactionReceipt: fromEthers.getDelta(state, `transaction|receipt|${props.transaction.hash}|${props.transaction.nonce}`),
  contractDeployTransaction: fromEthers.getDelta(state, `contract|create|ERC20|${state.tracer.activeAccount}|${state.wallets[state.tracer.activeAccount].nonce}`),
});

/* --- Store Distpach --- */
const mapDispatchToProps = (dispatch, props) => ({
  /**
   * @method transactionReceiptRequest
   * @desc Request the submitted transaction receipt.
   */
  transactionReceiptRequest: ()=>dispatch(ethers.blockchainTransactionReceipt(REQUEST)(
  props.transaction.hash,
    {
      delta: `transaction|receipt|${props.transaction.hash}|${props.transaction.nonce}`,
      network: 'rinkeby'
    },
  )),

  /**
   * @method deployedSave
   * @desc Save the deployed contract to the store. 
   */
  deployedSave: (transaction, params)=>dispatch(deployed.deployedContract(REQUEST)(
    transaction,
    {
      delta: `transaction|receipt|${props.transaction.hash}|${props.transaction.nonce}`,
      type: "ERC20",
      params: params
    },
  )),
});

/* --- Lifecycle --- */
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.transactionReceiptRequest();
  },
  componentDidUpdate(prevProps)
  {
    if (!this.props.transactionReceipt.output && !this.props.timerPassed && !this.props.contractSaved) {
      this.props.timerPassedToggle(toggle=>!toggle);
      setTimeout(() => {
        this.props.transactionReceiptRequest();
        this.props.timerPassedToggle(toggle=>!toggle);
      }, 8000);
    }
    if (this.props.transactionReceipt.output && !this.props.contractSaved) {
      this.props.deployedSave(this.props.transactionReceipt.output, this.props.contractDeployTransaction.input.params);
      this.props.contractSavedToggle(toggle=>!toggle);
    }
  }
});

/* --- Lifecycle State --- */
/**
 * @method Timerpass
 * @desc Prevent the setTimeout from infinite loops.
 */
const TimerPass = withState(
  "timerPassed",
  "timerPassedToggle",
  false
);

/**
 * @method ContractSaved
 * @desc Track when the smart contract has been succesfully deployed 
 * and added to the interface/deployed store department.
 */
const ContractSaved = withState(
  "contractSaved",
  "contractSavedToggle",
  false
);

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ContractSaved,
  TimerPass,
  QueryLifecycle,
)(Component);


