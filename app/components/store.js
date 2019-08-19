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
                <View style={styles.storeNameAndScore}>
                  <Text style={styles.storeName}>{store.name}</Text>
                  {Math.floor(store.score/2) === 5 && <Text style={styles.storeName}>⭑⭑⭑⭑⭑</Text>}
                  {Math.floor(store.score/2) === 4 && <Text style={styles.storeName}>⭑⭑⭑⭑⭒</Text>}
                  {Math.floor(store.score/2) === 3 && <Text style={styles.storeName}>⭑⭑⭑⭒⭒</Text>}
                  {Math.floor(store.score/2) === 2 && <Text style={styles.storeName}>⭑⭑⭒⭒⭒</Text>}
                  {Math.floor(store.score/2) === 1 && <Text style={styles.storeName}>⭑⭒⭒⭒⭒</Text>}
                  {Math.floor(store.score/2) === 0 && <Text style={styles.storeName}>⭒⭒⭒⭒⭒</Text>}
                  {/* <Text style={styles.storeName}>Score: {store.score}</Text> */}
                </View>
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
  },
  storeName: {
    margin: 5,
    padding: 5,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: "600",
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
  },
  storeNameAndScore: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
};

export default Store;