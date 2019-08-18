/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



import DrawerNavi from './drawerNav';



export default class MotherShip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
    }
  }


  render() {
    return (
      <DrawerNavi screenProps={this.state}/>
    )
  }
}


// export default MotherShip;
