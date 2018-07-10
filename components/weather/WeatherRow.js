import React, { Component, PropTypes } from "react";
import { View, Text } from "react-native";

class WeatherRow extends Component {
  /*static propTypes = {
    day: React.PropTypes.Object,
    index: React.PropTypes.Number
  };*/

  constructor(props) {
    super(props);
    console.log("PROPS KEY:", props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.day.item.main.temp} °C</Text>
      </View>
    );
  }
}

export default WeatherRow;
