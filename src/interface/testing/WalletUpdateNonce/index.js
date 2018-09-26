/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import { REQUEST } from "interface/store/departments/utils";
import ethers from "interface/store/departments/blockchain/ethers/actions";
import wallets from "interface/store/departments/interface/wallets/actions";
import { 
  fromEthers,
  fromTracer,
  fromWallets
 } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";
/* ---* React Container --- */
/* -- Redux -- */
const mapStateToProps = (state, props) => ({
  accountActive: fromTracer.getDelta(state, 'activeAccount'),
  walletActive: fromWallets.getDelta(state, `${props.accountActive}`),
});

const mapDispatchToProps = (dispatch, props) => ({
  nonceCheck: (nonce)=>dispatch(ethers.accountTransactionCount(REQUEST)(
    nonce,
    {
      delta: `wallet|primary|nonce|update`,
    },
  )),
  walletNonceUpdate: (nonce, wallet)=>dispatch(wallets.walletNonceUpdate(REQUEST)(
    nonce,
    {
      address: wallet,
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
      if (this.props.nonce && this.props.nonce.status && !this.props.nonceUpdatedStatus) {
        this.props.walletNonceUpdate(this.props.nonce.data, this.props.accountActive);
        this.props.nonceUpdatedStatusToggle(toggle=>!toggle);
      }
    }
  });

const NonceToggle = withState(
  "nonceUpdatedStatus",
  "nonceUpdatedStatusToggle",
  false
);

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  NonceToggle,
  QueryLifecycle,
)(Component);
