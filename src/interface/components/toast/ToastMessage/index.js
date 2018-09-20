import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Toast } from "native-base";

class BasicToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  render() {
    return (
    <TouchableOpacity
      onPress={() => Toast.show({ 
        text: this.props.text || "",
        buttonText: this.props.buttonText || "",
        duration: this.props.duration || 3000,
        type: this.props.type || "success"
      })}>
      {this.props.children}
    </TouchableOpacity>);
  }
}

export default BasicToast;
