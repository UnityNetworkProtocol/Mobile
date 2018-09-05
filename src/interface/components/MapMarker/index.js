/* --- Global Dependencies ---*/
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image, ImageBackground } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Card,
  Button,
  Left,
  Right,
} from "native-base";

/* --- Local Dependencies ---*/
import {
  Flex,
  Icon,
  Text,
  View
} from "atomic";


/* --- React Component ---*/
class MapModal extends Component {
  render() {
    return (
      <Marker 
        key={this.props.hash}
      />
    );
  }
}

export default withNavigation(MapModal);
