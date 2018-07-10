import React, { Component } from "react";
import { Text, ActivityIndicator, FlatList } from "react-native";

import axios from "axios";

import WeatherRow from "./weather/WeatherRow";

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
    console.log("CONSTRUCTOR");
    this.fetchWeather();
  }

  componentDidMount = () => {
    console.log("MOUNTED: ", this.state.report);
  };

  fetchWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          this.state.city
        }&mode=json&units=metric&cnt=12&APPID=7ad755a5c950ed324a9376b774cd75db`
      )
      .then(response => {
        console.log(response.data);
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
      console.log("REPORT: ", this.state.report.list);
      console.log("type", typeof this.state.report.list);
      this.state.report.list.map(row => console.log(row.main.temp));
      return (
        <FlatList
          data={this.state.report.list}
          renderItem={(row, ind, sep) => (
            <WeatherRow day={row} key={ind} hi={ind} />
          )}
        />
      );
    }
  }
}

export default Result;
