/* --- Global Modules --*/
import "../shim";
import "idempotent-babel-polyfill";
import firebase from "react-native-firebase";
import React, { Component } from "react";
import {Provider} from "react-redux";
import { StyleProvider } from "native-base";
import SplashScreen from "react-native-splash-screen";

/* --- Local Modules --*/
import storeSetup from "interface/store/configuration";
import App from "./root";
import getTheme from "./interface/theme/components";
import variables from "./interface/theme/variables/commonColor";

/* --- Initialize Redux Store --*/
const store = storeSetup.configureStore();
/* --- React Component --*/
export default class Entry extends Component {

  componentDidMount() {
      SplashScreen.hide(); // Hide SplashScreen after initial loading.
      // console.log(firebase)
      // firebase.auth()
      // .signInAnonymouslyAndRetrieveData()
      // .then(credential => {
      //   if (credential) {
      //     console.log('default app user ->', credential.user.toJSON());
      //   }
      // });
      

  }
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <App />
        </StyleProvider>
      </Provider>
    );
  }
}
