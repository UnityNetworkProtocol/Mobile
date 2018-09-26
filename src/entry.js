/* --- Global Modules --*/
import "../shim";

// import "idempotent-babel-polyfill";
import React, { Component } from "react";
import {Provider} from "react-redux";
import { StyleProvider } from "native-base";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "styled-components";

/* --- Local Modules --*/
import Warehouse from "interface/store/configuration";
import App from "./root";
import getTheme from "./interface/theme/components";
import variables from "./interface/theme/variables/commonColor";

/* --- Initialize Redux Store --- */
const warehouse = Warehouse.configureStore();

/* --- Application Theme --- */
const theme = {
  main: "mediumseagreen"
};

/* --- React Component --*/
export default class Entry extends Component {
  
  componentDidMount() {
      SplashScreen.hide(); // Hide SplashScreen after initial loading.
  }

  render() {
    return (
      <Provider store={warehouse.store}>
        <ThemeProvider theme={theme} >
          <StyleProvider style={getTheme(variables)}>
            <App />
          </StyleProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
