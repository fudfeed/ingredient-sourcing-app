import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Feed from './components/feed.js'
import Input from './components/input.js';
import fudMap from './components/map.js';
import Search from './components/search.js';
import Header from './components/header.js';


const AppNavigator = (props) = createStackNavigator(
  {
    

    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => ({
        title: `füdfeed`,
        header: <Header navigation={props}/>
      })
    },
    Header: {
      screen: Header
    },
    Input:  {
      screen: Input
    }
  },
  {
    // initialRouteName: Feed,
  },

);

export default createAppContainer(AppNavigator);