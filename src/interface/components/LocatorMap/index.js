
import React, { Component } from "react";
import { AppRegistry, View, Dimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const MarkerPoints = [
  {
    hash: "0xc2331",
    title: "The Juice Shop",
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    description: "Buy Ether"
  },
  {
    hash: "0xc2321",
    title: "Localties",
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4532,
    },
    description: "Buy Ether"
  },
  {
    hash: "0xc2341",
    title: "Aroma",
    coordinate: {
      latitude: 37.95825,
      longitude: -122.5212,
    },
    description: "Buy Ether"
  },
];


export default class LocatorMap extends Component {
 render() {

   return (
    <View style ={styles.container}>
     <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
          zoom: 4,
        }}
       >
       {MarkerPoints.map(item=><Marker key={item.hash} {...item} />)}
       </MapView>
     </View>
   );
 }
}

let { width, height } = Dimensions.get('window');
const styles = {
  container: {
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: 400,
    height: 400,
  },
};

