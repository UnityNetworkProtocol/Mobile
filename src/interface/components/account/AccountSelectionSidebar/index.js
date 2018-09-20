/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
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
  Icon,
  View
} from "atomic";
/* --- Local Modules --- */
import styles from "./styles";
import stylesCardItem from "./stylesCardItem";
// Assets
import avatarDemo from "assets/images/avatarDemo.jpg";
import LogoAugur from "assets/logoAugur.png";

import profiles from "demo/data/profiles"

const EthAmount = props => <Flex
  align="center" justify="center"
  style={styles.viewEth}>
  <Text style={styles.textBalance}>32</Text>
  {/* <Text style={styles.textAccount}>ETH</Text> */}
</Flex>


/*--- React Component --- */
export default class ModalTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  // Toggle Modal
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Flex align="center" >
          <Flex align="center" justify="center" width={"30%"} style={{position: "relative"}}  >
            <Image style={styles.avatar} source={avatarDemo}/>
            <EthAmount/>
          </Flex>
          <Flex direction="column" justify="center" width={"60%"} >
              <Text style={styles.textName}>Kames Geraghty</Text>
              <Text style={styles.textAccount}>kames.unity.eth</Text>
          </Flex>
          <Flex direction="column" justify="center" width={"10%"} >
            <TouchableOpacity onPress={this._toggleModal}>
              <Icon style={{ color: "#FFF", fontSize: 22}} name="ios-arrow-dropdown" />
            </TouchableOpacity>
          </Flex>
        </Flex>
        <Flex justify="space-between" style={{marginTop: 20}} >
        <Flex direction="column" align="center" justify="center" >
          <Flex justify="space-evenly" >
            <Icon style={{color: "#FFF", fontSize: 22, marginRight: 15}} name="ios-analytics-outline" />
            <Text style={{color: "#FFF"}}>{this.props.accountChannels || 0}</Text>
          </Flex>
          <Text note>Channels</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center" >
          <Flex>
            <Icon style={{color: "#FFF", fontSize: 22, marginRight: 15}}  name="ios-cloud-circle-outline" />
            <Text style={{color: "#FFF"}}>{this.props.accountRequests || 0}</Text>
          </Flex>
          <Text note>Requests</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center" >
          <Flex>
            <Icon style={{color: "#FFF", fontSize: 22, marginRight: 15}}  name="ios-cube-outline" />
            <Text style={{color: "#FFF"}}>{this.props.accountNotifications || 0}</Text>
          </Flex>
          <Text note>Notifications</Text>
        </Flex>
      </Flex>
        <Modal
          scrollable
          isVisible={this.state.isModalVisible}
          hideModalContentWhileAnimating={true}
          animationIn="slideInUp" >
          <ModalRender _toggleModal={this._toggleModal} />
        </Modal>
      </View>
    );
  }
}

const ModalRender = props =>
<Container>
    <Flex width="100%" style={{marginBottom: 12}} >
      <Flex justify="flex-start" width={"50%"} >
        <Text style={{color: "#FFF",fontSize: 18}}> Account Selection</Text>
      </Flex>
      <Flex justify="flex-end" width={"50%"} >
        <TouchableOpacity style={{paddingLeft: 20}} onPress={props._toggleModal}>
          <Text style={{color: "#FFF", fontSize: 18}} note>X</Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
    <Container
    style={{
      backgroundColor: "#FFF",
      padding: 10,
    }}
  >
    <Content>
    {
      profiles.map((item, index)=><AccountSelectionCard key={index} {...item}/>)
    }
  </Content>
</Container>
</Container>;

const AccountSelectionCard = props =>
<TouchableOpacity>
<Card style={stylesCardItem.card} >
  <Flex align="center" >
    <Flex align="center" justify="center" width={"30%"} style={{position: "relative"}}  >
      <Image style={stylesCardItem.avatar} source={avatarDemo}/>
      <EthAmount/>
    </Flex>
    <Flex direction="column" justify="center" width={"70%"} >
      <Text style={stylesCardItem.textName}>{props.name}</Text>
      <Text style={stylesCardItem.textAccount}>{props.address}</Text>
    </Flex>
  </Flex>
  <Flex justify="space-between" style={{marginTop: 20}} >
    <Flex direction="column" align="center" justify="center" >
      <Flex justify="space-evenly" >
        <Icon style={{color: "#484848", fontSize: 22, marginRight: 15}} name="ios-analytics-outline" />
        <Text>{props.accountChannels}</Text>
      </Flex>
      <Text note>Channels</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex>
        <Icon style={{color: "#484848", fontSize: 22, marginRight: 15}}  name="ios-cloud-circle-outline" />
        <Text>{props.accountRequests}</Text>
      </Flex>
      <Text note>Requests</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex>
        <Icon style={{color: "#484848", fontSize: 22, marginRight: 15}}  name="ios-cube-outline" />
        <Text>{props.accountNotifications}</Text>
      </Flex>
      <Text note>Notifications</Text>
    </Flex>
  </Flex>
</Card>
</TouchableOpacity>