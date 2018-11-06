import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  SwipeRow,
  Text,
} from "native-base";

import {
  Flex,
} from "atomic";
import logo from "assets/logo.png";

const AttestationItem = props =>(
  <SwipeRow
    leftOpenValue={75}
    rightOpenValue={-75}
    left={
      <Button success onPress={() => alert("Add")}>
        <Icon active name="add" style={{ color: "#FFF" }} />
      </Button>
    }
    right={
      <Button danger onPress={() => alert("Trash")}>
        <Icon active name="trash" />
      </Button>
    }
    body={
      <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginBottom: 7, padding: 7 }} >
        <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
          <Text note>{props.label}:</Text>
        </Flex>
        <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
          <Text width="100%" style={{textAlign: "right"}}>{props.value}</Text>
        </Flex>
      </Flex>
    }
  />
)
const AttestationRow = props =>(
 <Flex align="stretch" justify="space-between" style={{backgroundColor: "#FFF", borderRadius: 10, marginBottom: 7, padding: 7 }} >
  <Flex align="center" width={"50%"} style={{textAlign: "left"}} >
    <Text note>{props.label}:</Text>
  </Flex>
  <Flex direction="column" align="flex-end" width="50%" style={{textAlign: "right"}} >
    <Text width="100%" style={{textAlign: "right"}}>{props.value}</Text>
  </Flex>
</Flex>)




export default props =>
<Container>
<Flex align="center" width="100%" style={{marginBottom: 12}} >
  <Flex justify="flex-start" width={"70%"} >
    <Text style={{color: "#FFF",fontSize: 14}}>Cryptograpgically Verifiable Attestation</Text>
  </Flex>
  <Flex justify="flex-end" width={"30%"} >
    <TouchableOpacity style={{paddingLeft: 20}} onPress={props.modalToggle}>
      <Text style={{color: "#FFF", fontSize: 18}} note>X</Text>
    </TouchableOpacity>
  </Flex>
</Flex>
<Container>
  <Content style={{backgroundColor: "#f9f9fe"}}>
    <Card style={{backgroundColor: "#f9f9fe"}}>
      <CardItem bordered >
        <Flex align="center" justify="space-between" >
          <Flex justify="center"  width={"20%"} >
            <Image style={{height: 45, width: 45}} source={logo}/>
          </Flex>
          <Flex direction="column" width={"80%"} >
            <Text style={{fontSize:14}} >{props.modalData.attestation.doc.uportProfile.name}</Text>
            <Text style={{fontSize:10}} >{props.modalData.attestation.issuer}</Text>
            <Text note>{props.modalData.attestation.doc.uportProfile.urkl}</Text>
          </Flex>
        </Flex>
      </CardItem>
      <Flex direction="column" style={{backgroundColor: "#f9f9fe", padding: 10, heightMin: 240 }} >
        <Text style={{fontSize: 22, fontWeight: "700", marginBottom: 15 }}>
          Claim Information
        </Text>
        {console.log(props)}
        {
          Object.keys(props.modalData.attestation.payload.claim).map((k, i)=>
          <Text key={i} note>{k}:{props.modalData.attestation.payload.claim[k]}</Text>)
        }
      </Flex>
    </Card>
    </Content>
  </Container>
  <Flex align="center" justify="space-between" style={{backgroundColor: "#5c54c7", padding: 17}}>
    <Button primary>
      <Text style={{fontSize: 10}} >
        Accept
      </Text>
    </Button>
    <Text note style={{color: "#FFF"}}>
      Save Attestation
    </Text>
    <Button danger>
      <Text style={{fontSize: 10}} >
        Reject
      </Text>
    </Button>
  </Flex>
</Container>