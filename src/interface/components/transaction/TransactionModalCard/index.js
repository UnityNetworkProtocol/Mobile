/* --- Global Modules ---*/
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Text,
} from "native-base";


/* --- Local Modules --- */
import LogoSpank from "assets/logoSpankChain.png";
import SmartContractorSelectorModal from "interface/components/smartContract/SmartContractorSelectorModal"
import {
  Flex,
} from "atomic";


const ERC20Catalog = {
  "0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7": {
    name: "SpankChain",
    logo: LogoSpank
  }
}

export default props =>
<Container>
    <Flex align="center" width="100%" style={{marginBottom: 12}} >
      <Flex justify="flex-start" width={"70%"} >
        <Text style={{color: "#FFF",fontSize: 18}}> Transaction</Text>
      </Flex>
      <Flex justify="flex-end" width={"30%"} >
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
        <Flex align="center" width="100%" style={{marginBottom: 12}} >
          <Flex justify="flex-start" width={"50%"} >
            <Text note  width="50%">network: mainnet</Text>
          </Flex>
          <Flex justify="flex-end" width={"50%"} >
            <Text note>{props.modalData.meta[1]}</Text>
          </Flex>
        </Flex>
        </CardItem>
        <View style={{backgroundColor: "#f9f9fe", padding: 10}} >
          <Flex align="center" >
            <Flex justify="flex-start" width={"10%"} >
              <Image
                source={ERC20Catalog[props.modalData.address].logo}
                style={{borderRadius: 99999, height: 40, width: 40}}
              />
            </Flex>
            <Flex width={"90%"} >
              <TouchableOpacity style={{paddingLeft: 20}} onPress={props.modalToggle}>
                <Text style={{fontSize: 18}}>
                  {ERC20Catalog[props.modalData.address].name}
                </Text>
                <Text style={{fontSize: 10}} note>
                  {props.modalData.address}
                </Text>
              </TouchableOpacity>
            </Flex>
          </Flex>

          <Flex direction="column" style={{marginTop: 10}} >
              {/* 
                Pass Smart Contract Function Call information to master Modal Components 
              */}
              <SmartContractorSelectorModal {...props.modalData} />
          </Flex>
        </View>
        <View style={{backgroundColor: "#eaeaf1", padding: 10}}>
          {/* <Text note>logistics</Text> */}
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
          <Flex justify="space-between" style={{marginTop: 20, paddingHorizontal: 20}} >
            <Flex direction="column" align="center" justify="center" >
              <Flex justify="space-evenly" >
                <Icon style={{color: "#484848", fontSize: 22}} name="ios-analytics-outline" />
              </Flex>
              <Text note>Slow</Text>
            </Flex>
            <Flex direction="column" align="center" justify="center" >
              <Flex>
                <Icon style={{color: "#484848", fontSize: 22}}  name="ios-cloud-circle-outline" />
              </Flex>
              <Text note>Average</Text>
            </Flex>
            <Flex direction="column" align="center" justify="center" >
              <Flex>
                <Icon style={{color: "#484848", fontSize: 22}}  name="ios-cube-outline" />
              </Flex>
              <Text note>Fast</Text>
            </Flex>
          </Flex>
        </View>
        <Flex justify="center" style={{paddingVertical: 10}} >
            <Text note>Advanced Options</Text>
        </Flex>
      </Card>
    </Content>
  </Container>
  <Flex align="center" justify="space-between" style={{backgroundColor: "#5c54c7", padding: 17}}>
    <Button primary>
      <Text style={{fontSize: 10}} >
        Confirm
      </Text>
    </Button>
    <Text style={{color: "#FFF"}} >
      {props.modalData.meta[1]}
    </Text>
    <Button danger>
      <Text style={{fontSize: 10}} >
        Cancel
      </Text>
    </Button>
  </Flex>
</Container>;