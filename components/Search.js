import React, { Component } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

import Result from "./Result";
import globalStyles from "../Styles";

class Search extends Component {
  static navigationOptions = {
    title: "Look for a city"
  };

  constructor(props) {
    super(props);
    this.state = {
      city: "Sofia"
    };
  }

  setCity = city => {
    this.setState({ city: city });
  };

  submit = () => {
    this.props.navigation.navigate("Result", { city: this.state.city });
    console.log("Search");
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <TextInput
          onChangeText={text => {
            this.setCity(text);
          }}
          underlineColorAndroid="transparent"
          style={globalStyles.input}
          value={this.state.city}
        />
        <Button
          color={globalStyles.color}
          title="Search for a city"
          onPress={() => this.submit()}
        />
      </View>
    );
  }
}

const navigationOptions = {
  headerStyle: globalStyles.header,
  headerTitleStyle: globalStyles.headerTitle
};

export default createStackNavigator({
  Result: {
    screen: Result,
    navigationOptions
  },
  Search: {
    screen: Search,
    navigationOptions
  }
});
