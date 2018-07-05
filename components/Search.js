import React, { Component } from "react";
import {} from "react-native";
import { TextInput } from "react-native-gesture-handler";

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
  render() {
    return (
      <TextInput
        onChangeText={text => {
          this.setCity(text);
        }}
        underlineColorAndroid="transparent"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={this.state.city}
      />
    );
  }
}

export default Search;
