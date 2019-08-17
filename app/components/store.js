import React, { Fragment } from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { genericTypeAnnotation } from '@babel/types';

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
    margin: 10,
    fontSize: 16,
    fontWeight: "600"
  },
  storeItem: {
    fontSize: 10,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1
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