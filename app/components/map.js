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
import Header from './header.js';
import Store from './store.js';
import axios from 'axios';

class fudMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      query: 'rice'
    }
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

  getStores = () => {
    axios
      .get('http://localhost:3000/stores/rice')
      .then(({ data }) => {
        this.setState({
          stores: data
        })
      })
      .catch(() => console.error('Sorry, we could not get stores'));
  }

  displayMarkers = () => {
    if (this.state.stores.length > 0) {
      {
        this.state.stores.map((store) => {
          return (
            <MapView.Marker
              coordinate={{
                latitude: store.latitude,
                longitude: store.longitude
              }}
              title={store.name}
              description={`score: ${store.score}`}
            />
          )
        })
      }
    } else {
      return (
        <MapView.Marker
          coordinate={{
            latitude: 34.0522,
            longitude: -118.2437
          }}
          title='Default'
          description='This is default marker'
        />
      )
    }
  }

  displayStores = () => {
    if (this.state.stores.length > 0) {
      return <Store stores={this.state.stores} query={this.state.query}/>
    } else {
      return <View></View>
    }
  }

  componentDidMount() {
    this.getStores();
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView>
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: 33.9984305,
                  longitude: -118.379041,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
              >
                <View>
                  {this.displayMarkers()}
                </View>
              </MapView>
            </View>
            <View style={styles.resultContainer}>
              <Text style={styles.result}>Search Results for {this.state.query}</Text>
              <View>{this.displayStores()}</View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = {
  container: {
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
    margin: 10,
    paddingLeft: 10,
    marginTop: 320
  },
  result: {
    fontSize: 20
  }
};

export default fudMap;