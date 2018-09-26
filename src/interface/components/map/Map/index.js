/* --- Global Dependencies --- */
import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE } from "react-native-maps";

/* --- Local Dependencies --- */
import MarkerPoints from "demo/data/mapFiatOnRamp";
/* --- React Component --- */
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

