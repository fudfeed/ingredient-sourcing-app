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

const Input = (props) => {
  return (
    <Fragment>
      <SafeAreaView>
      <Header handleMenu={props.navigation.openDrawer} />
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
        <Text>This is Input</Text>
      </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Input;

/*
to use header
import Header from './header.js';
<Header />
<ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
*/