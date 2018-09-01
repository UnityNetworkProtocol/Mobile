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
    transaction: props.navigation.state.params.transaction
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
