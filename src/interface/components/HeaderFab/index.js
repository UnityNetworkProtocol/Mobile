import React, { Component } from 'react';
import { withNavigation } from "react-navigation";
import { Container, Header, View, Fab, Button, Icon, Text } from 'native-base';

class FabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "false"
    };
  }
  render() {
    return (
        // <View style={{ flex: 1, position: "relative", marginTop: -40}}>
          <Fab
            active={this.state.active || false}
            direction="left"
            containerStyle={{ marginTop:-25  }}
            style={{ backgroundColor: '#5067FF',zIndex: 10000, height: 40, width: 40 }}
            position="topRight"
            onPress={() => this.setState({ active: !this.state.active })}
            >
            <Icon style={{fontSize: 14, padding: 5, height: 20, width: 20}} name="ios-menu" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("QRScanner")}
              style={{ backgroundColor: '#3B5998' }}>
              <Icon
                onPress={() => this.props.navigation.navigate("QRScanner")}
                name="ios-qr-scanner-outline" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
            </Fab>
        // </View>
    );
  }
}

export default withNavigation(FabMenu);