/* --- Global Dependencies --- */
import React from "react";
import { Image } from "react-native";
import {
  Button,
  Card,
  CardItem
} from "native-base";

/* --- Local Dependencies --- */
import {
  Flex,
  Text
} from "atomic";
import tokenQuest from "assets/images/tokenQuest.png";

const Contracts = [
  {
    address: "0xc78ba87a035126d40bff69d731b2e4390fd9f36f",
    contractType: "ERC20",
    params: [
      10000,
      'Trust Token',
      0,
      'TRST'
    ]
  }
]

const ContractERC20Card = props =>(
  <Card style={{width: "100%"}} >
    <CardItem bordered>
      <Flex>
        <Image source={tokenQuest} style={{height: 45, width: 45, marginRight: 15}} />
        <Flex direction="column" >
          <Flex>
            <Text style={{marginRight: 10}} >
              Trust Token
            </Text>
            <Text note>
              TRST
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </CardItem>
    <CardItem bordered>
      <Flex direction="column">
        <Text>
          Supply: {props.params[0]}
        </Text>
        <Text>
          Ownership: {props.params[0]}
        </Text>
        <Text note>
          {props.address}
        </Text>
      </Flex>
    </CardItem>
    <CardItem>
      <Flex justify="space-between" width="100%" >
        <Button><Text>Send Tokens</Text></Button>
        <Button><Text>Open Channel</Text></Button>
      </Flex>
    </CardItem>
  </Card>
)

/* ------- React Component ------- */
export default props => 
<Flex direction="column" width="100%" >
  {
    Contracts.map((item, index) => <ContractERC20Card key={index} {...item} />)
  }
</Flex>