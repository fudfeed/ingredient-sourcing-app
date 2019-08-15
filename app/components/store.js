import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Store = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <View>
          <View style={styles.store}>
            <Text>This is Store</Text>
          </View>
          <View style={styles.storeItem}>
            <Text>This is Ingredient 1</Text>
            <Text>Price</Text>
          </View>
          <View style={styles.storeItem}>
            <Text>This is Ingredient 2</Text>
            <Text>Price</Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = {
  store: {
    padding: 10,
    fontSize: 14
  },
  storeItem: {
    fontSize: 10,
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

export default Store;