/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

/* --- Local Dependencies --- */
import ipfs from "interface/store/departments/blockchain/ipfs/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromIpfs } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* ------------ React Container ------------ */
/* --- Redux --- */
const mapStateToProps = (state, props) => ({
  subscribed: fromIpfs.getDelta(state, 'wallet|sign|tx'),
});


const mapDispatchToProps = (dispatch, props) => ({
  pubsubSubscribe: ()=>dispatch(ipfs.pubsubSubscribe(REQUEST)(
    {
      pubsubAddress: '0xbE335c3D8614a863A550966372c865E079CcA4E8',
    },
    {
      delta: 'ipfs|pubsub|subscribe',
    },
    )),
});

/* --- Lifecycle --- */
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
