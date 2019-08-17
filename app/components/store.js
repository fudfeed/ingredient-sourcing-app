import React, { Fragment } from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';

const Store = (props) => {
  return (
    <Fragment>
      <SafeAreaView>
        {props.stores.map((store, key) => {
          return (
            <View key={key}>
              <Text style={styles.store}>{store.name}</Text>
              {store.ingredients.map((item, key) => {
                if (item.name === props.query) {
                  return (
                    <View style={styles.storeItem} key={key}>
                      <Text style={styles.item}>{item.name.trim()}</Text>
                      <Text style={styles.price}>{`$${item.price}`}</Text>
                    </View>
                  )
                }
              })}
            </View>
          )
        })}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = {
  store: {
    padding: 10,
    fontSize: 16
  },
  storeItem: {
    fontSize: 10,
    flexDirection: 'row',
    paddingLeft: 15
  },
  item: {
    flex: 3
  },
  price: {
    flex: 1
  }
};

export default Store;