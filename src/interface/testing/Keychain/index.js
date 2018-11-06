/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */
import { REQUEST } from "interface/store/departments/utils";
import keychain from "interface/store/departments/backend/keychain/actions";
import { fromKeychain } from "interface/store/departments/selectors";

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

});


const mapDispatchToProps = (dispatch, props) => ({
  keySave: ()=>dispatch(keychain.keySave(REQUEST)(
    {
      
    },
    {
      delta: 'keychain|save',
    },
  )),
});

/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  LifecyleExample,
  QueryLifecycle,
)(Component);
