/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromEthers } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */

/*-* State Management *-*/
const LifecyleExample = withState(
  "example",
  "exampleToggle",
  true
);


/*-* Recompose *-*/
/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  transactionRecord: fromEthers.getDelta(state, `transaction|${props.transaction}`),
  transactionReceipt: fromEthers.getDelta(state, `transaction|receipt|${props.transaction}`),
});


const mapDispatchToProps = (dispatch, props) => ({
  transactionData: ()=>dispatch(ethers.blockchainTransaction(REQUEST)(
    props.transaction,
    {
      delta: `transaction|${props.transaction}`,
      network: 'rinkeby'
    },
  )),
  transactionReceipt: ()=>dispatch(ethers.blockchainTransactionReceipt(REQUEST)(
  props.transaction,
    {
      delta: `transaction|receipt|${props.transaction}`,
      network: 'rinkeby'
    },
  )),
});

const QueryLifecycle = lifecycle(
  {
    componentDidMount()
    {
      this.props.transactionReceipt();
    },
    componentDidUpdate(prevProps)
    {
  
    }
  });

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
