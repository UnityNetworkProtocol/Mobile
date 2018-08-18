/* ------------------------- External Dependencies -------------------------- */
import React, {Component} from "react";
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

/* ------------------------- Internal Dependencies -------------------------- */
// import WalletGeneratedDisplay from 'assimilation/components/ethers/EthersWalletGeneratedDisplay'
// import { fromEthers } from 'store/selectors'
// import ethers from 'store/ethers/actions'
/* ---------------------------- Module Package ------------------------------ */
const defaultProps = withProps(props=>({
  providerName: 'Infura'
}));

const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    // this.props.ethersWalletCreateRandomRequest({
    //   metadata: {
    //     delta: `wallet|random`
    //   }
    // })
  }
});
const mapStateToProps = (state, props) => ({
    // data: fromEthers.getDeltaData(state,  `wallet|random`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  // ethersWalletCreateRandomRequest: ()=>dispatch(ethers.walletGenerateRandom('REQUEST')(
  //   null,
  //   {
  //     delta: `wallet|random`
  //   },
    
  //   )),
})



class WalletDisplay extends Component {
  render() {
    return (
    <Content>
      <Text>
        Hello
      </Text>
    </Content>
    )}
  }


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps
)(WalletDisplay);