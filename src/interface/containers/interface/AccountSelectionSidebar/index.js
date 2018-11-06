/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withStateHandlers } from "recompose";
/* --- Local Dependencies --- */
import { REQUEST } from "interface/store/departments/utils";
import tracer from "interface/store/departments/interface/tracer/actions";
import {
  fromTracer
 } from "interface/store/departments/selectors";
/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */

/* --- Store State --- */
const mapStateToProps = (state, props) => ({
  accountActive: fromTracer.getDelta(state, 'activeAccount'),
  wallet: state.wallets[state.tracer.activeAccount],
  wallets: state.wallets,
});

/* --- Store Distpach --- */
const mapDispatchToProps = (dispatch, props) => ({
  tracerWalletActive: (address)=>dispatch(tracer.tracerWalletActive(REQUEST)(
  address,
  {},
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
    if ( this.props.accountActive !== prevProps.accountActive) {
      this.props.modalToggle();
    }
  }
});

const ModalState = withStateHandlers(
  ({ dialogState = false }) => ({
    modalData: null,
    modalState: dialogState,
  }),
    {
    modalToggle: (props) => (value) => {
      // If the Modal is closing reactivate the QRScannerObject to scan QR codes.
      // props.modalState ? props.QRScannerObject.reactivate() : null;
      return {modalState: !props.modalState}
    },
  }
);


/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ModalState,
  QueryLifecycle,
)(Component);
