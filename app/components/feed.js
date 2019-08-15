import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './header.js';

const Feed = (props) => {
  return (
    <Fragment>
      <SafeAreaView>
          <Header handleMenu={props.navigation.openDrawer} />
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
          <View>
            <Text>This is Feed</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Feed;

/*
to use header
import Header from './header.js';
<Header />
<ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
*/