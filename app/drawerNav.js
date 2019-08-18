import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { createDrawerNavigator, createAppContainer, NavigateActions, createStackNavigator } from 'react-navigation';

import Feed from './components/feed.js'
import Input from './components/input.js';
import fudMap from './components/map.js';
import Search from './components/search.js';

const navigateToScreen = (route) => () => {
  const navigateAction = NavigationActions.navigate({
    routeName: route
  });
  props.navigation.dispatch(navigateAction);
}

const DrawerNavigator = createDrawerNavigator(
  {
    DrawerMenu: {
      screen: createStackNavigator({
        Screen1: {
          screen: Feed
        },
        Screen2: {
          screen: Search
        },
        Screen3: {
          screen: Input
        },
        Screen4: {
          screen: fudMap
        }
      }, {}

      )
    },
    'füdfeed': {
      screen: (props) => <Feed {...props} />
    },
    'search füd': {
      screen: Search
    },
    'input füd': {
      screen: Input
    },
    'füd map': {
      screen: fudMap
    },
  },

  {
    initialRouteName: 'DrawerMenu',
    drawerType: 'front',
    hideStatusBar: true,
    drawerBackgroundColor: 'cornsilk', //'rgba(253, 248, 220, 0.9)', //#fdf8dc
    overlayColor: '#888888',
    paths: 'test',
    contentComponent: (props) => (
      <ScrollView>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('Screen1')}>
            füdfeed
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('Screen2')}>
            search füd
        </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('Screen3')}>
            input füd
        </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('Screen4')}>
            füd map
        </Text>
        </View>
      </ScrollView>

    ),
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#FFC966',
    },
  },
);


export default createAppContainer(DrawerNavigator);

  // {
  //   'füdfeed': {
  //     screen: (props) => <Feed {...props } test={moreProps}/>
  //   },
  //   'search füd': {
  //     screen: Search
  //   },
  //   'input füd': {
  //     screen: Input
  //   },
  //   'füd map': {
  //     screen: fudMap
  //   },
  // },  