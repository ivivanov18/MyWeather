import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class About extends Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={style.view}>
        <Text style={style.title}>About me</Text>
        <Text>
          Software Engineer that is passionate about learning how to design
          better IT systems and about Web Technologies.
        </Text>
        <Text>
          This app was developed from the GREAT tutorial of Grafikart on
          Youtube. The tutorial is in French and you can find on the following
          address: https://www.youtube.com/watch?v=Y7rbJRjaYCY
        </Text>
        <Button onPress={() => this.search()} title="Search" />
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    margin: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});

export default About;
