/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */

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
  data: {
    category: "Bounties",
    account: props.navigation.state.params.account
  }
});


const mapDispatchToProps = (dispatch, props) => ({

});

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
  LifecyleExample,
)(Component);
