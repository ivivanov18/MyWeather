import React, { Component } from "react";
import { Text, ActivityIndicator, FlatList } from "react-native";

import axios from "axios";

import WeatherRow from "./weather/WeatherRow";

import globalStyles from "../Styles";

class Result extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Weather in ${navigation.state.params.city}`
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      city: this.props.navigation.state.params.city,
      report: null
    };
  }

  componentDidMount = () => {
    this.fetchWeather();
  };

  fetchWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          this.state.city
        }&mode=json&units=metric&APPID=7ad755a5c950ed324a9376b774cd75db`
      )
      .then(response => {
        this.setState({
          report: response.data
        });
      });
  };

  //TODO: correct key warning
  render() {
    if (this.state.report === null) {
      return <ActivityIndicator color={globalStyles.color} size="large" />;
    } else {
      return (
        <FlatList
          data={this.state.report.list}
          keyExtractor={item => item.dt}
          renderItem={({ item, index }) => (
            <WeatherRow day={item} index={index} key={item.dt.toString()} />
          )}
        />
      );
    }
  }
}

export default Result;
