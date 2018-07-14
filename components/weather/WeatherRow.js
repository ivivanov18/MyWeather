import React, { Component, PropTypes } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment";
import "moment/locale/fr";

import globalStyles from "../../Styles";

moment.locale("fr");

class WeatherRow extends Component {
  /*static propTypes = {
    day: React.PropTypes.Object,
    index: React.PropTypes.Number
  };*/

  constructor(props) {
    super(props);
    console.log("PROPS KEY:", props);
  }

  day = () => {
    const day = moment(this.props.day.dt * 1000).format("ddd");
    return <Text style={styles.bold}>{day.toUpperCase()}</Text>;
  };

  date = () => {
    const date = moment(this.props.day.dt * 1000).format("DD/MM");
    return <Text>{date}</Text>;
  };

  icon = (size = 50) => {
    const typeWeather = this.props.day.weather[0].main.toLowerCase();

    let image = null;
    switch (typeWeather) {
      case "clouds":
        image = require("../../resources/icons/cloud.png");
        break;
      case "rain":
        image = require("../../resources/icons/rain.png");
        break;
      default:
        image = require("../../resources/icons/sun.jpg");
        break;
    }

    return <Image source={image} style={{ width: size, height: size }} />;
  };

  render() {
    if (this.props.index === 0) {
      return (
        <View style={[styles.view, styles.flex, styles.firstView]}>
          <View>
            <Text style={{ color: "#FFF" }}>
              {this.day()} {this.date()}{" "}
            </Text>
            {this.icon(90)}
          </View>
          <Text style={[styles.temp, { fontSize: 35 }]}>
            {Math.round(this.props.day.main.temp)} °C
          </Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.view, styles.flex]}>
          <View style={styles.flex}>
            {this.icon()}

            <Text style={{ marginLeft: 20 }}>
              {this.day()} {this.date()}{" "}
            </Text>
          </View>
          <Text style={styles.temp}>
            {Math.round(this.props.day.main.temp)} °C
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  white: {
    color: "#FFF"
  },
  bold: {
    fontWeight: "bold"
  },
  flex: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  firstView: {
    backgroundColor: globalStyles.blueColor
  },
  view: {
    backgroundColor: globalStyles.greenColor,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#055864",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  temp: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 22
  }
});

export default WeatherRow;
