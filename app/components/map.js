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
import Store from './store.js';
// import sampleData from './sampleData.js';

class fudMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      query: '',
    }
  }

  displayMarkers = () => {
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

  displayStores = () => {
    if (this.state.stores.length > 0) {
      return <Store stores={this.state.stores} query={this.state.query} />
    } else {
      return <View>
        <Text>Sorry, no results matched your search</Text>
      </View>
    }
  }

  componentDidMount(prevProps) {
    const { navigation } = this.props;
    const storeSearch = navigation.getParam('storeSearch');
    const queryArray = navigation.getParam('queryArray');
    const queryString = this.state.query;
    if (storeSearch) {
      queryString = queryArray.join(', ');
      if (prevProps !== this.props) {
        this.setState({
          stores: storeSearch,
          query: queryString
        })
      }
    }
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: 33.9984305,
                  longitude: -118.379041,
                  latitudeDelta: 0.1922,
                  longitudeDelta: 0.1421
                }}
              >
                {this.state.stores.map((store, key) => {
                  return (
                    <MapView.Marker
                      key={key}
                      coordinate={{
                        latitude: store.latitude,
                        longitude: store.longitude
                      }}
                      title={store.name}
                      description={`score: ${store.score}`}
                    />
                  )
                })}
              </MapView>
            </View>
            <View style={styles.resultContainer}>
              {this.state.query.length > 0 && <Text style={styles.result}>Search Results for {this.state.query}</Text>}
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