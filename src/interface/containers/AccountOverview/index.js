/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import { REQUEST } from "interface/store/departments/utils";
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { fromEthers } from "interface/store/departments/selectors";
import { fromWallets } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if (!this.props.history) {
      this.props.accountHistory();
    }
  },
  componentDidUpdate(prevProps)
  {

  }
});

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  address: props.navigation.state.params.address,
  wallet: fromWallets.getDelta(state, props.navigation.state.params.address),
  history: fromEthers.getDelta(state, `wallet|history|${props.navigation.state.params.address}`),
});


const mapDispatchToProps = (dispatch, props) => ({
  accountHistory: ()=>dispatch(ethers.accountHistory(REQUEST)(
    {
      ethAddress: props.navigation.state.params.address,
      blockStart: 0,
      blockEnd: "latest"
    },
    {
      delta: `wallet|history|${props.navigation.state.params.address}`,
      network: 'rinkeby'
    },
  )),
});

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
