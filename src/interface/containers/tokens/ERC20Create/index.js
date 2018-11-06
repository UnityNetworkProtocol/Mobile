/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { compose, lifecycle } from "recompose";
/* --- Local Dependencies --- */
import deployed from "interface/store/departments/interface/deployed/actions";
import ethers from "interface/store/departments/blockchain/ethers/actions";
import { REQUEST } from "interface/store/departments/utils";
import { fromEthers } from "interface/store/departments/selectors";
import { fromTracer } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";
import { ERC20 } from "contracts";

/* ------- React Container ------- */
/*-* Recompose *-*/

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  accountActive: fromTracer.getDelta(state, 'activeAccount'),
  contractDeployTransaction: fromEthers.getDelta(
    state, 
    `contract|create|ERC20|${state.tracer.activeAccount}|${state.wallets[state.tracer.activeAccount].nonce}`
    ),
  nonce: state.wallets[state.tracer.activeAccount].nonce
});


const mapDispatchToProps = (dispatch, props) => ({
  contractDeploy: (address, nonce)=>dispatch(ethers.contractDeploy(REQUEST)(
    {
      abi: ERC20.abi,
      bytecode: ERC20.bytecode,
      params: [
        1000000,
        "UNTY",
        0,
        "UNTY",
      ]
    },
    {
      delta: `contract|create|ERC20|${address}|${nonce}`,
      network: 'rinkeby'
    },
  )),

  /**
   * Deployed Save
   * @desc Save the deployed contract to the store. 
   */
  deployedSave: (transaction)=>dispatch(deployed.deployedContract(REQUEST)(
    transaction,
    {
      type: "ERC20"
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
      /**
       * IF the Smart Contract deploy transaction has been submitted to the blockchain
       * succesfully add the transaction information to persisted state.
       */
      if ( this.props.contractDeployTransaction && this.props.contractDeployTransaction.status)
      {
        // this.props.deployedSave(this.props.contractDeployTransaction.data);
        /**
         * NAVIGATE to the the ContractDeployed View.
         * PASS the transaction receipt AND smart contract metadata.
         */
        this.props.navigation.navigate("ContractDeployed", {
          transaction: this.props.contractDeployTransaction.data,
          contract: {
            type: "ERC20"
          }
        });
      }
    }
  });

/* --- Export --- */
export default withNavigation(compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component));
