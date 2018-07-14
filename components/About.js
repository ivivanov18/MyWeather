import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import globalStyles from "../Styles";

class About extends Component {
  search = () => {
    console.log(this.props.navigation);
    this.props.navigation.navigate("Search");
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>About me</Text>
        <Text style={{ margin: 20 }}>
          Software Engineer that is passionate about learning how to design
          better IT systems and about Web Technologies.
        </Text>
        <Text style={{ margin: 20 }}>
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
    margin: 20,
    marginTop: 50,
    backgroundColor: globalStyles.color
  }
});

export default About;
