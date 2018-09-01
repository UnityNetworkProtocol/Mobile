/* --- External Modules --- */
import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

/* --- Local Modules --- */
import styles from "./styles";
import bgUniverse from "src/assets/images/bgUniverse.jpg";

/* --- React Component --- */
export default class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bgUniverse} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            {/* <ImageBackground source={launchscreenLogo} style={styles.logo} /> */}
            <H3 style={styles.textLogo}>unity</H3>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>Ethereum State Channel(s)</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>Proof of Concept</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text>Start Exploring</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

