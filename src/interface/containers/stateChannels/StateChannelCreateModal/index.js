/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
/* --- Local Dependencies --- */
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromEthers } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";
import { SimplePaymentChannel } from "contracts";

/* ------- React Container ------- */
/*-* Recompose *-*/

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({

});


const mapDispatchToProps = (dispatch, props) => ({
  contractDeploy: ()=>dispatch(ethers.contractDeploy(REQUEST)(
    {
      abi: SimplePaymentChannel.abi,
      bytecode: SimplePaymentChannel.bytecode,
      params: [
        "0xbE335c3D8614a863A550966372c865E079CcA4E8",
        1000
      ]
    },
    {
      delta: `contract|create|stateChannelSimple`,
      network: 'rinkeby'
    },
  )),
});

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
