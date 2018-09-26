/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

/* --- Local Dependencies --- */
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromWallets } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* --- React Container --- */
/* -- Redux -- */
const mapStateToProps = (state, props) => ({
  tx: fromWallets.getDelta(state, 'wallet|sign|tx'),
});


const mapDispatchToProps = (dispatch, props) => ({
  walletSign: ()=>dispatch(ethers.walletSign(REQUEST)(
    {
      ethAddress: '0xbE335c3D8614a863A550966372c865E079CcA4E8',
      ethAmount: '0.0000001'
    },
    {
      delta: 'wallet|sign|tx',
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
  
    }
  });

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
