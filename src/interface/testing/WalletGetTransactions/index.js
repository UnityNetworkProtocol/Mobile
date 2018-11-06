/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
/* --- Local Dependencies --- */
import { REQUEST } from "interface/store/departments/utils";
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { fromEthers } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";
/* ---* React Container --- */
/* -- Redux -- */
const mapStateToProps = (state, props) => ({
  history: fromEthers.getDelta(state, 'wallet|history'),
});


const mapDispatchToProps = (dispatch, props) => ({
  walletSign: ()=>dispatch(ethers.accountHistory(REQUEST)(
    {
      ethAddress: '0xbE335c3D8614a863A550966372c865E079CcA4E8',
    },
    {
      delta: 'wallet|history',
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
  
    }
  });

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
