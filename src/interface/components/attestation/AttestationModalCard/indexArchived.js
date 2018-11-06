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

const DataMap = [
  {
    title: "Basic Information",
    claim: [
      {
        label: "Name",
        value: "Kames Geraghty"
      },
      {
        label: "Phone",
        value: "415 879-1469"
      },
    ]
  },
  {
    title: "Location",
    claim: [
      {
        label: "Address",
        value: "121 Scenic Drive"
      },
      {
        label: "City",
        value: "San Rafael"
      },
      {
        label: "State",
        value: "California"
      },
      {
        label: "Country",
        value: "United States"
      },
    ]
  },
  {
    title: "Community",
    claim: [
      {
        label: "Name",
        value: "BuidlGuidl"
      },
      {
        label: "Title",
        value: "Bard"
      },
      {
        label: "Time",
        value: "2 Years"
      },
      {
        label: "Achievements",
        value: "Founding Member"
      },
    ]
  }
]

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
    <Text style={{color: "#FFF",fontSize: 14}}>Selective Disclosure Request</Text>
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
      <CardItem bordered >
        <Flex align="center" justify="space-between" >
          <Flex direction="column"  width={"70%"} >
            <Text>Unity LLC</Text>
            <Text note>api.unity.io/login</Text>
          </Flex>
          <Flex justify="flex-end"  width={"30%"} >
            <Image style={{height: 45, width: 45}} source={logo}/>
          </Flex>
        </Flex>
      </CardItem>
      <Flex direction="column" style={{backgroundColor: "#f9f9fe", padding: 10}} >
        {console.log('Attestation Card Data', props)}

        {
          props.modalData.attestation
          .then(result => {

            return Object.keys(result.payload.claim).map(k=>{
              <Text>result.payload.claim[k]</Text>
            })
          })
        }
        {DataMap.map((attestation, index)=>(
          <SwipeRow
            key={index}
            leftOpenValue={175}
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
              <View>
                <Flex direction="column" style={{marginBottom: 10}} >
                <Text>{attestation.title}</Text>
                {attestation.claim.map((item, key)=><AttestationRow key={key} {...item}/>)}
              </Flex>
              </View>
              }
            />
        ))}
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
      Send Information
    </Text>
    <Button danger>
      <Text style={{fontSize: 10}} >
        Reject
      </Text>
    </Button>
  </Flex>
</Container>