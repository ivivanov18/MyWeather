import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ListView,
  FlatList
} from "react-native";
import axios from "axios";

import globalStyles from "../Styles";

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
    this.fetchWeather();
  }

  fetchWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          this.state.city
        }&mode=json&units=metric&cnt=12&APPID=7ad755a5c950ed324a9376b774cd75db`
      )
      .then(response => {
        this.setState({
          report: response.data
        });
      });
  };

  render() {
    if (this.state.report === null) {
      return <ActivityIndicator color={globalStyles.color} size="large" />;
    } else {
      console.log("REPORT: ", this.state.report);
      return (
        <FlatList
          data={this.state.report.list}
          renderItem={({ item }) => <Text>{item.main.temp}</Text>}
        />
      );
    }
  }
}

export default Result;
