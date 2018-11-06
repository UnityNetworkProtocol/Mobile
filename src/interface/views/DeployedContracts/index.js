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
import ContractsDeployed from "interface/containers/contracts/ContractsDeployed"

/* --- React Component ---*/
export default class Demo extends Component {
  render() {
    return (
      <Container>
        <HeaderStandard title="Deployed Contracts" />
        <Content>
          <Flex direction="column" style={{padding: 10}} >
            <ContractsDeployed/>
          </Flex>
        </Content>
      </Container>
    );
  }
}

