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

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import Header from './header.js';
// import token from './token.js';
import Store from './store.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421
  //     }
  //   };
  // }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  // render() {
  //   return (
  //     <MapView
  //       region={this.state.region}
  //       onRegionChange={this.onRegionChange}
  //     />
  //   );
  // }

  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text>
                hello
                </Text>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
              />
            </View>
            <View style={styles.resultContainer}>
              <Text style={styles.result}>This is Results</Text>
              <Store />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = {
  map1: {
    // backgroundColor: '#fdf8dc',
    height: 250,
    padding: 10,
    margin: 10
  },
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  resultContainer: {
    flex: 2,
    // backgroundColor: 'green',
    height: 400,
    padding: 10,
    margin: 10,
    marginTop: 320
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