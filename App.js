import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import About from "./components/About";
import Search from "./components/Search";

import globalStyles from "./Styles";

const Tabs = createBottomTabNavigator(
  {
    About: About,
    Search: Search
  },
  {
    tabBarOptions: {
      activeTintColor: "#956EB7",
      inactiveTintColor: "#9EA9CF",
      labelStyle: {
        fontSize: 16,
        textAlignVertical: "center"
      },
      style: {
        backgroundColor: globalStyles.color,
        height: 30
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.greenColor
  }
});
