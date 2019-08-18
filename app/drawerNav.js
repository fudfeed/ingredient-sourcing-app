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
import Header from './components/header.js';


const DrawerNavigator = createDrawerNavigator(
  {
    DrawerMenu: {
      screen: createStackNavigator({
        Feed: {
          screen: Feed,
          navigationOptions: {
            header: (props) => (

                <View style={{backgroundColor: '#FFF'}}>
                  <Header 
                  handleMenu={props.navigation.openDrawer}
                    navi={props.navigation}
                    stickyHeaderIndices={[0]}
                  > </Header>
                </View>
            )
          },
        },
        Search: {
          screen: Search,
          navigationOptions: {
            header: (props) => (

                <View style={{backgroundColor: '#FFF'}}>
                  <Header 
                  handleMenu={props.navigation.openDrawer}
                    navi={props.navigation}
                    stickyHeaderIndices={[0]}
                  > </Header>
                </View>
            )
          },
        },
        Camera: {
          screen: Input
        },
        FudMap: {
          screen: fudMap
        }
      }, {
        initialRouteName: 'Search'
        }

      )
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
      <ScrollView style={{ marginTop: 33, marginLeft: 20 }}>
        <View style={{ marginTop: 20 }}>
          <Text onPress={() => props.navigation.navigate('Feed')}>
            füdfeed
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('Search')}>
            search füd
        </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('Camera')}>
            input füd
        </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text onPress={() => props.navigation.navigate('FudMap')}>
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