/* --- Global Dependencies ---*/
import React, { Component } from "react";
import {
  Container,
} from "native-base";

/* --- Local Dependencies ---*/
import {
  Flex,
} from "atomic";

import HeaderStandard from "interface/components/general/HeaderStandard";
import TransactionModal from "interface/components/transaction/TransactionModal";

/* --- Component Dependencies ---*/


/* --- React Component ---*/
export default class Demo extends Component {
  render() {
    return (
      <Container>
        <HeaderStandard title="Demos" />
        <Flex style={{padding: 10}} >
          <TransactionModal/>
        </Flex>
      </Container>
    );
  }
}

