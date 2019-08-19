import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Feed from './components/feed.js'
import Post from './components/post.js';
import fudMap from './components/map.js';
import Search from './components/search.js';
import Header from './components/header.js';
import _sidemenuStyle from './components/sideMenuStyles.js'


const DrawerNavigator = createDrawerNavigator(
  {
    DrawerMenu: {
      screen: createStackNavigator({
        Feed: {
          screen: Feed,
          navigationOptions: {
            header: (props) => (

              <View style={{ backgroundColor: '#FFF' }}>
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

              <View style={{ backgroundColor: '#FFF' }}>
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
          screen: Post,
          navigationOptions: {
            header: (props) => (

              <View style={{ backgroundColor: '#FFF' }}>
                <Header
                  handleMenu={props.navigation.openDrawer}
                  navi={props.navigation}
                  stickyHeaderIndices={[0]}
                > </Header>
              </View>
            )
          }
        },
        FudMap: {
          screen: fudMap,
          navigationOptions: {
            header: (props) => (

              <View style={{ backgroundColor: '#FFF' }}>
                <Header
                  handleMenu={props.navigation.openDrawer}
                  navi={props.navigation}
                  stickyHeaderIndices={[0]}
                > </Header>
              </View>
            )
          }
        }
      }, {
          initialRouteName: 'Feed'
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
      <ScrollView style={{ marginTop: 0 }}>
        <View style={_sidemenuStyle.avaImgContainer}>
          <Image source={{ uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/1501298_10152927112776522_1833154138514612679_o.jpg?_nc_cat=105&_nc_oc=AQkCqTzcEn9UYTl1cnLvUffNCg964txqK5V-0sVSTZbom2KQPHBQAgDSnZeJv6J1vOY&_nc_ht=scontent-dfw5-1.xx&oh=7db92de80873dc1d290f0c578c1edd9e&oe=5DD89EC4' }} style={_sidemenuStyle.Image} />
          <View >
            <Text style={_sidemenuStyle.TextHeader}>
              Welcome,
            </Text>
            <Text style={_sidemenuStyle.TextHeader}>
              Chef Wayne!
            </Text>
          </View>
        </View>
        <TouchableOpacity style={_sidemenuStyle.menuItem}
          onPress={() => props.navigation.navigate('Feed')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={_sidemenuStyle.BarIconWrapper}>
              <Icon name="restaurant" size={18} />
            </View>
            <View style={_sidemenuStyle.TextWrapper}>
              <Text style={_sidemenuStyle.Text} >
                füdfeed
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={_sidemenuStyle.menuItem}
          onPress={() => props.navigation.navigate('Search')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={_sidemenuStyle.BarIconWrapper}>
              <Icon name="search" size={18} />
            </View>
            <View style={_sidemenuStyle.TextWrapper}>
              <Text style={_sidemenuStyle.Text} >
                search füd
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={_sidemenuStyle.menuItem}
          onPress={() => props.navigation.navigate('Camera')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={_sidemenuStyle.BarIconWrapper}>
              <Icon name="camera" size={18} />
            </View>
            <View style={_sidemenuStyle.TextWrapper}>
              <Text style={_sidemenuStyle.Text} >
                post füd
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={_sidemenuStyle.menuItem}
          onPress={() => props.navigation.navigate('FudMap')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={_sidemenuStyle.BarIconWrapper}>
              <Icon name="place" size={18} />
            </View>
            <View style={_sidemenuStyle.TextWrapper}>
              <Text style={_sidemenuStyle.Text} >
                füd map
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={_sidemenuStyle.TeamSpeak} >
          <Text style={_sidemenuStyle.HeaderText}>
            Created By:
          </Text>
          <View>
            <Text style={_sidemenuStyle.HeaderText}>
              Wayne Hwang, Kristina Taing,
            </Text>
            <Text style={_sidemenuStyle.HeaderText}>
              Jeremy Bishow, Chris Pham
            </Text>
          </View>
        </View>
        <View style={_sidemenuStyle.Footer} >
          <View style={_sidemenuStyle.FooterContainer}>
            <View style={_sidemenuStyle.FooterItem}>
              <Text style={_sidemenuStyle.FooterText}>
                füdfeed app v1.0.1
                </Text>
            </View>
          </View>
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