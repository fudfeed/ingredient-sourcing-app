import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from 'axios';
import { FlatList } from "react-native-gesture-handler";
import FeedCard from './feedCard'

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
  }

  componentDidMount() {
    axios.get('http://localhost:3000/recipes')
      .then((data) => {
        var newData = data.data;
        this.setState({
          feedData: newData
        });
      })
      .catch((err) => {
        alert('data retrieval failure', err);
      })
  }

  renderImages(props) {
    return (
      this.state.feedData.map((obj, i) => {
        return (
          <FeedCard key={i} name={obj.name} imageUrl={obj.photo} styles={styles} />
        )
      })
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
            <FeedCard name={item.name} imageUrl={item.photo} styles={styles} />
            )}
            maxToRenderPerBatch={2}
            updateCellsBatchingPeriod={2}
            initialNumToRender={3}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default Feed;
