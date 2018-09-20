import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Text,
} from "native-base";

import {
  Flex,
} from "atomic";

import LogoAugur from "assets/logoAugur.png";

export default props =>
<Container>
<Flex width="100%" style={{marginBottom: 12}} >
      <Flex justify="flex-start" width={"50%"} >
        <Text style={{color: "#FFF",fontSize: 18}}> Transaction</Text>
      </Flex>
      <Flex justify="flex-end" width={"50%"} >
        <TouchableOpacity style={{paddingLeft: 20}} onPress={props.modalToggle}>
          <Text style={{color: "#FFF", fontSize: 18}} note>X</Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
<Container>
<Content>
<Card>
  {/* Card Header */}
  <CardItem bordered>
    <Flex direction="column" >
    <Flex justify="space-between" width="100%" >
      <Text note  width="50%">network: mainnet</Text>
      <Text note  width="50%">network: healthy</Text>
    </Flex>
    </Flex>
  </CardItem>
  <View style={{backgroundColor: "#f9f9fe", padding: 10}} >
    <Flex direction="column" >
      <Text note>details</Text>

      <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, padding: 7 }} >
        <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
          <Text>Bet Amount</Text>
        </Flex>
        <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
          <Text width="100%" style={{textAlign: "right"}}>$45.26</Text>
          <Text note width="100%">0.2000045230 ETH</Text>
        </Flex>
      </Flex>
      
      <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginTop: 10, padding: 7 }} >
        <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
          <Text>Token Amount</Text>
        </Flex>
        <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
          <Text width="100%" style={{textAlign: "right"}}>4 REP</Text>
          <Text note width="100%">$45.29</Text>
        </Flex>
      </Flex>

      <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginTop: 10, padding: 7 }} >
        <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
          <Text>Permission</Text>
        </Flex>
        <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
          <Text note width="100%">Validator</Text>
        </Flex>
      </Flex>

    </Flex>
  </View>
  <View style={{backgroundColor: "#eaeaf1", padding: 10}}>
    <Text note>network</Text>
    <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginTop: 10, padding: 7 }} >
    <Flex align="center" width={"33%"} style={{textAlign: "left"}} >
      <Text>Medium</Text>
    </Flex>
    <Flex align="center" justify="center" width={"33%"} style={{textAlign: "left"}} >
      <Text>~25sec</Text>
    </Flex>
    <Flex direction="column" align="flex-end" width="33%" style={{textAlign: "right"}} >
    <Text width="100%" style={{textAlign: "right"}}>$0.68</Text>
        <Text note width="100%">2 GWEI</Text>
    </Flex>
  </Flex>
  </View>
  <Flex justify="center" style={{backgroundColor: "#5c54c7", padding: 17}}>
    <Button primary>
      <Text style={{fontSize: 10}} >
        Confirm
      </Text>
    </Button>
    <Button danger>
      <Text style={{fontSize: 10}} >
        Cancel
      </Text>
    </Button>
  </Flex>
  <View style={{backgroundColor: "#eaeaf1", padding: 10}}>
    <Flex direction="column" >
      <Text note>smart contract</Text>
      {/* <Image source={LogoAugur} style={{width: 40, height: 40}} /> */}
      <Text>Entity: Augur </Text>
      <Text>Address: bet.augur.eth (0x53v1l8...) </Text>
      <Text>Interactions: 34 </Text>
    </Flex>
  </View>
</Card>
</Content>
</Container>
</Container>