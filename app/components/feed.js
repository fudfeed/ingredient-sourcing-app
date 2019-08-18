import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from "react-native";
import Header from "./header.js";
import axios from 'axios';
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import Recipe from './recipe'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: [],
      page: 1,
      loading: true,
      loadingMore: false,
      error: null
    };
    this.renderImages = this.renderImages.bind(this);
    this._handleLoadMore = this._handleLoadMore.bind(this);
    this._fetchMoreData = this._fetchMoreData.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/impromptuu/1d7227ff9f073337947b83b718a75233/raw/280f127cf7c7efcbd563eb86bd0e6615fbccb9ff/recipeSampleData.txt')
      .then(({ data }) => {
        this.setState({
          feedData: data
        });
      })
      .catch((err) => {
        alert('data retrieval failure', err);
      })
  }

  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true
      }),
      () => {
        this._fetchMoreData();
      }
    )
  }

  _fetchMoreData = () => {

  }

  renderImages() {
    return (
      this.state.feedData.map((obj, i) => {
        return (
          <Recipe key={i} item={item} />
        )
      })
    )
  }
  // this.state.feedData[0].chef.name
  renderHeader() {
    return (
      <SafeAreaView>
        <Header handleMenu={this.props.navigation.openDrawer} />
      </SafeAreaView>
    )
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList contentContainerStyle={{
        }}
          data={this.state.feedData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Recipe item={item} />
          )}

          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
          maxToRenderPerBatch={2}
          updateCellsBatchingPeriod={2}
          initialNumToRender={3}
        />
      </SafeAreaView>
    );
  }
  // render() {
  //   return (
  // <Fragment>
  //   <SafeAreaView>
  //     <Header handleMenu={this.props.navigation.openDrawer} />
  //     <ScrollView>
  //       {
  //         this.state.feedData.length > 0 ? this.renderImages() : null
  //       }
  //     </ScrollView>
  //   </SafeAreaView>
  // </Fragment>
  //   );
  // }
}

export default Feed;
