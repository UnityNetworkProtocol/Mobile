/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
/* --- Local Dependencies --- */
import { fromWallets } from "interface/store/departments/selectors";

/* --- Module Dependencies --- */
import Component from "./component";

/* --- React Container --- */
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

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  wallets: fromWallets.getTree(state),
});


const mapDispatchToProps = (dispatch, props) => ({
 
});

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
