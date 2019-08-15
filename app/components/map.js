import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import Header from './header.js';
import Store from './store.js';

const Map = (props) => {
  return (
    <Fragment>
      <SafeAreaView>
        <Header handleMenu={props.navigation.openDrawer}/>
        <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
          <View style={styles.map}>
            <Text>This is Map</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>This is Results</Text>
            <Store />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = {
  // header: {
  //   height: 50,
  //   borderBottomColor: 'gray',
  //   borderBottomWidth: 0.5,
  //   padding: 10,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // menu: {
  //   height: 45,
  //   width: 45
  // },
  // logo: {
  //   height: 40,
  //   width: 40
  // },
  // camera: {
  //   height: 35,
  //   width: 35
  // },
  map: {
    backgroundColor: '#fdf8dc',
    height: 250,
    padding: 10,
    margin: 10
  },
  resultContainer: {
    backgroundColor: 'green',
    height: 400,
    padding: 10,
    margin: 10
  },
  result: {
    fontSize: 20
  } //,
  // store: {
  //   padding: 10,
  //   fontSize: 14
  // },
  // storeItem: {
  //   fontSize: 10,
  //   // padding: 5,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around'
  // }
};

export default Map;