/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
/* --- Local Dependencies --- */
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromEthers } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";
import { GnosisSafe } from "contracts";

const notOwnedAddress = "0x0000000000000000000000000000000000000002"
/* ------- React Container ------- */
/*-* Recompose *-*/

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({

});


const mapDispatchToProps = (dispatch, props) => ({
  contractDeploy: ()=>dispatch(ethers.contractDeploy(REQUEST)(
    {
      abi: GnosisSafe.abi,
      bytecode: GnosisSafe.bytecode,
      params: [
        [notOwnedAddress], 1, 0, 0
      ]
    },
    {
      delta: `contract|create|Safe`,
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
