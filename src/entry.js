/* --- Global Modules --*/
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
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
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
