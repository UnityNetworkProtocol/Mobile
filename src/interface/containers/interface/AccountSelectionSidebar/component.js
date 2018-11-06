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
import iconEth from "assets/iconEth.png";
import iconTokens from "assets/icons/iconToken.png";
import blockiePurple from "assets/blockiePurple.png";

// Components 
import ToastMessage from "interface/components/toast/ToastMessage";
import ModalAccountQR from "interface/components/modal/ModalAccountQR";

const EthAmount = props => <Flex
  align="center" justify="center"
  style={styles.viewEth}>
  {/* <Text style={styles.textBalance}>32</Text> */}
  <Image style={{width: 30, height:30, borderRadius: 999}} source={blockiePurple}/>
  {/* <Text style={styles.textAccount}>ETH</Text> */}
</Flex>


/*--- React Component --- */
export default props =>
<View style={{ flex: 1 }}>
  <Flex justify="space-evenly" style={{backgroundColor: "#9658cf", paddingVertical: 7, paddingHorizontal: 10}} >
    <Flex>
      <Image style={{height: 20, width: 20}} source={iconEth}/>
      <Text style={{color: "#FFF"}} note>
        ΞTH: {props.wallet.balanceEth}
      </Text>
    </Flex>
    <Flex>
      <Image style={{height: 20, width: 20}} source={iconTokens}/>
      <Text style={{color: "#FFF"}} note>
        Tokens: {props.wallet.balanceTokens}
      </Text>
    </Flex>
    <Flex>
      <Image style={{height: 20, width: 20}} source={iconEth}/>
      <Text style={{color: "#FFF"}} note>
        NFT: {props.wallet.balanceEth}
      </Text>
    </Flex>
  </Flex>
  <View style={{paddingLeft: 15,paddingRight: 15, paddingVertical: 20}} >
  <Flex align="center" >
    <Flex align="center" justify="flex-start" width={"30%"} style={{position: "relative"}}  >
      <Image style={styles.avatar} source={props.wallet.avatar}/>
      <EthAmount/>
    </Flex>
    <Flex direction="column" justify="center" width={"60%"} >
        <Text style={styles.textName}>{props.wallet.walletName}</Text>
        <Text style={styles.textAccount}>{props.wallet.addressEns}</Text>
    </Flex>
    <Flex direction="column" justify="center" width={"10%"} >
      <TouchableOpacity onPress={props.modalToggle} >
        <Icon style={{ color: "#FFF", fontSize: 22}} name="ios-arrow-dropdown" />
      </TouchableOpacity>
    </Flex>
  </Flex>
  <Flex justify="space-between" style={{marginTop: 20}} >
    <Flex direction="column" align="center" justify="center" >
      <Flex align="center" >
        <Icon style={{color: "#FFF", fontSize: 16, marginRight: 5}} name="ios-analytics-outline" />
        <Text style={{color: "#FFF"}}>{props.accountChannels || 0}</Text>
      </Flex>
      <Text note  style={{color: "#FFF", fontSize: 10}}>Channels</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex align="center" >
        <Icon style={{color: "#FFF", fontSize: 16, marginRight: 5}} name="ios-cloud-circle-outline" />
        <Text style={{color: "#FFF"}}>{props.accountRequests || 0}</Text>
      </Flex>
      <Text note  style={{color: "#FFF", fontSize: 10}}>Requests</Text>
    </Flex>
    <Flex direction="column" align="center" justify="center" >
      <Flex align="center" >
        <Icon style={{color: "#FFF", fontSize: 16, marginRight: 5}}  name="ios-cube-outline" />
        <Text style={{color: "#FFF"}}>{props.accountNotifications || 0}</Text>
      </Flex>
      <Text note style={{color: "#FFF", fontSize: 10}}>Notifications</Text>
    </Flex>
  </Flex>
  </View>
  {/* 
    Wallet Information
  */}
  <Flex style={{backgroundColor: "#71bc20", paddingVertical: 7, paddingHorizontal: 5 }} >
    <Flex justify="flex-start" style={{width: "80%"}} >
      {/* <Icon style={{ color: "#FFF", fontSize: 16, marginRight: 5}} name="ios-contact-outline" /> */}
      <Text style={{ color: "#FFF", fontSize: 12, marginRight: 5}}>Wallet:</Text>
      <Image style={{width: 15, height:15, marginRight: 5}} source={blockiePurple}/>
      <Text style={{ color: "#FFF", fontSize: 10, marginRight: 5}}>0xc78ba87a03...4390fd9f36f</Text>
    </Flex>
    <Flex justify="flex-end" style={{width: "20%"}} >
      <ToastMessage
        text="Address Copied"
        buttonText="OK"
      >
        <Icon style={{ color: "#FFF", fontSize: 18, marginRight: 10}} color="#FFF" name="ios-link" />
      </ToastMessage>
      <ModalAccountQR/>
    </Flex>
  </Flex>
  {/* 
    Modal View
  */}
  <Modal
    scrollable
    backdropColor={"#FFF"}
    backdropOpacity={1}
    isVisible={props.modalState}
    hideModalContentWhileAnimating={true}
    animationIn="slideInUp" >
    <ModalRender modalToggle={props.modalToggle} tracerWalletActive={props.tracerWalletActive} wallets={props.wallets} />
  </Modal>
</View>

const ModalRender = props =>
<Container style={{backgroundColor: "#FFF"}}>
    <Flex width="100%" style={{marginBottom: 12}} >
      <Flex justify="flex-start" width={"50%"} >
        <Text style={{color: "#000",fontSize: 18}}>Account Selection</Text> 
      </Flex>
      <Flex justify="flex-end" width={"50%"} >
        <TouchableOpacity style={{paddingLeft: 20}} onPress={props.modalToggle}>
          <Text style={{color: "#000", fontSize: 18}} note>X</Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
    <Container
    style={{
      // backgroundColor: "#FFF",
    }}
  >
    <Content>
    {
      Object.keys(props.wallets).map( (item, index) =>
      <AccountSelectionCard
        key={index}
        tracerWalletActive={props.tracerWalletActive}
        {...props.wallets[item]}
        />)
    }
  </Content>
</Container>
</Container>
;

const AccountSelectionCard = props =>(
<TouchableOpacity onPress={()=>props.tracerWalletActive(props.address)} >
<Card style={stylesCardItem.card} >
  <Flex align="center" >
    <Flex align="center" justify="center" width={"30%"} style={{position: "relative"}}  >
      <Image style={stylesCardItem.avatar} source={props.avatar}/>
      <EthAmount/>
    </Flex>
    <Flex direction="column" justify="center" width={"70%"} >
      <Text style={stylesCardItem.textName}>{props.walletName}</Text>
      <Text style={stylesCardItem.textAccount}>{props.addressEns}</Text>
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
        <Text style={{color: "#484848"}}>{props.accountRequests}</Text>
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
  <Text note style={stylesCardItem.textAccount}>{props.address}</Text>
</Card>
</TouchableOpacity>
)