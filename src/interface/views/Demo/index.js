/* --- Global Dependencies ---*/
import React, { Component } from "react";
import {
  Container,
  Content,
} from "native-base";

/* --- Local Dependencies ---*/
import {
  Flex,
} from "atomic";

import HeaderStandard from "interface/components/general/HeaderStandard";
import TransactionModal from "interface/components/transaction/TransactionModal";

/* --- Component Dependencies ---*/
import WalletSendTransaction from "testing/WalletSendTransaction";
import WalletGetTransactions from "testing/WalletGetTransactions";

import WalletUpdateNonce from "testing/WalletUpdateNonce";

import SafeCreate from "testing/SafeCreate";
import IPFSPubSub from "testing/IPFSPubSub";

import ERC20Create from "interface/containers/tokens/ERC20Create";

/* --- React Component ---*/
export default class Demo extends Component {
  render() {
    return (
      <Container>
        
        <HeaderStandard title="Demos" />
        <Content>
          <Flex direction="column" style={{padding: 10}} >
            <ERC20Create/>
            <WalletUpdateNonce/>
            <SafeCreate/>
            <IPFSPubSub/>
            <WalletGetTransactions/>
            <WalletSendTransaction/>
            <TransactionModal/>
          </Flex>
        </Content>
      </Container>
    );
  }
}

