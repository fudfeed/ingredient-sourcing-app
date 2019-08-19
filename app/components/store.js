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
              <View style={styles.storeNameContainer}>
                <Text style={styles.storeName}>{store.name}</Text>
              </View>
              {store.ingredients.map((item, key) => {
                  return (
                    <View style={styles.storeItem} key={key}>
                      <Text style={styles.item}>{item.name}</Text>
                      <Text style={styles.price}>{`$${item.price}`}</Text>
                    </View>
                  )
              })}
            </View>
          )
        })}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = {
  storeNameContainer: {
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#bfe6ff'
    // backgroundColor: '#ffd862'
  },
  storeName: {
    margin: 5,
    padding: 5,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: "600",
    // backgroundColor: '#ffd862'
  },
  storeItem: {
    fontSize: 10,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    padding: 2,
    paddingLeft: 0
  },
  item: {
    flex: 3
  },
  price: {
    flex: 1,
    textAlign: 'right'
  }
};

export default Store;