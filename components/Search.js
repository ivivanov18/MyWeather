import React, { Component } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

import Result from "./Result";
import globalStyles from "../Styles";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Sofia"
    };
  }

  setCity = city => {
    this.setState({ city: city });
  };

  search = () => {
    this.props.navigation.navigate("Result");
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
          onPress={() => this.search()}
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Search: {
    screen: Search
  },
  Result: {
    screen: Result
  }
});
