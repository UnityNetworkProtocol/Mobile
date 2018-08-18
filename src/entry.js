/* --- Global Modules --*/
import React, { Component } from "react";
import {Provider} from "react-redux";
import { StyleProvider } from "native-base";

/* --- Local Modules --*/
import storeSetup from "interface/store/configuration";
import App from "./root";
import getTheme from "./interface/theme/components";
import variables from "./interface/theme/variables/commonColor";

/* --- Initialize Redux Store --*/
const store = storeSetup.configureStore();

/* --- React Component --*/
export default class Entry extends Component {
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
