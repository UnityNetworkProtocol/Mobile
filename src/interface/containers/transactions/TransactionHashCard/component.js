/* --- Global Dependencies --- */
import React from "react";
import {
  Card,
  CardItem,
  Container,
  Content
} from "native-base";
/* --- Local Dependencies --- */
import {
  Flex,
  Text
} from "atomic";

const DeployState = status => ({
  "null": "Initializing",
  "1": "Deployed",
})[status];

/* ------- React Component ------- */
export default props => !(props.transactionReceipt) ? null :
<Container>
  <Content>
    <Flex direction="column" align="center" justify="center" style={{marginBottom: 15}} >
      <Text style={{fontSize: 36}}>
        {
          !(props.transactionReceipt.data && props.transactionReceipt.data.status)
          ? "Initializing"
          : DeployState(props.transactionReceipt.data.status)
        }
      </Text>
      <Text note>
        Status
      </Text>
    </Flex>
    <Card>
      <CardItem bordered>
        <Flex direction="column">
          <Flex align="center">
            <Text style={{fontWeight: "bold", fontSize: 16}}>Block: </Text>
            <Text note>{props.transaction.blockNumber}</Text>
          </Flex>
          <Flex align="center">
            <Text style={{fontWeight: "bold"}}>Timestamp: </Text>
            <Text note>{props.transaction.timestamp}</Text>
          </Flex>
          <Flex align="center">
            <Text style={{fontWeight: "bold"}}>Gas Price: </Text>
            <Text note>{props.transaction.gasPrice.toString()}</Text>
          </Flex>
          <Flex align="center">
            <Text style={{fontWeight: "bold"}}>Gas Limit: </Text>
            <Text note>{props.transaction.gasLimit.toString()}</Text>
          </Flex>
        </Flex>
      </CardItem>
      <CardItem bordered>
        <Flex direction="column">
          <Text style={{fontWeight: "bold"}}>From:</Text>
          <Text note>{props.transaction.from}</Text>
          <Text style={{fontWeight: "bold"}}>To:</Text>
          <Text note>{props.transaction.to}</Text>
          <Text style={{fontWeight: "bold"}}>Data:</Text>
          <Text note>{props.transaction.data}</Text>
        </Flex>
      </CardItem>
    </Card>
  </Content>
</Container>;
