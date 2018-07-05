import React, { Component } from "react";
import {} from "react-native";
import { TextInput, View, StyleSheet, Button } from "react-native";

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

export default Search;
