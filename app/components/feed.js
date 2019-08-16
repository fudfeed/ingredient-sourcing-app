import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import Header from "./header.js";
import feedData from "../../database/testData";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: []
    };
  }

  componentDidMount() {
    // this.setState({
    //   feedData: feedData
    // }, () => alert('hi'));
  }
  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}
          >
            <View>
              <Text>This is Feed</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Feed;

/*
to use header
import Header from './header.js';
<Header />
<ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
*/
