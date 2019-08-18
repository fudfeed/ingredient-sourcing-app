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
    this.hopTo = this.hopTo.bind(this);
    this.grabSearchData = this.grabSearchData.bind(this);
  }

  hopTo = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  grabSearchData(data) {
    this.setState = {
      searchData: data
    }
  }

  render() {
    return (
      <DrawerNavi />
    )
  }
}


// export default MotherShip;
