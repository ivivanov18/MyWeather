import React, { Component } from "react";
import { View, Text } from "react-native";
class Result extends Component {
  static navigationOptions = ({ navigation }) => {
    //console.log("PARAMS : ", params);
    /*return {
      title: `Weather in / ${navigation.state.params.city}`
    };*/
  };

  constructor(props) {
    super(props);
    this.state = {
      city: "Sofia", //this.props.navigation.state.params.city,
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
