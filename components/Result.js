import React, { Component } from "react";
import { View, Text } from "react-native";
class Result extends Component {
  static navigationOptions = {
    title: "Weather in / "
  };

  constructor(props) {
    super(props);
    console.log("state", this.props.navigation.state);
    this.state = {
      city: "",
      report: null
    };
  }
  render() {
    return (
      <View>
        <Text>Result</Text>
      </View>
    );
  }
}

export default Result;
