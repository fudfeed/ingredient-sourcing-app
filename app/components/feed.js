import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from 'axios';
import { FlatList } from "react-native-gesture-handler";
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
    // this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/recipes')
      .then(({ data }) => {
        this.setState({
          feedData: data
        });
      })
      .catch((err) => {
        alert('data retrieval failure', err);
      })
  }

  componentDidUpdate(prevProps) {
    const { navigation } = this.props;
    const recipeSearch = navigation.getParam('recipeSearch')
      if (prevProps !== this.props) {
        this.setState({
          feedData: recipeSearch
          })
        }
    }

  render() {
    // const { navigation } = this.props;
    // const recipeData = navigation.getParam('recipeSearch', this.state.feedData)
    return (
      <SafeAreaView>
        {/* {console.warn('stuff:', this.props.navigation.state.params.recipes ? this.props.navigation : null)} */}
        <FlatList contentContainerStyle={{
        }}
          // data={this.props.navigation.state.params.recipes.length > 0 ? this.props.navigation.state.params.recipes : this.state.feedData}
          data={this.state.feedData}
          keyExtractor={item => item.name.toString()}
          renderItem={({ item }, i) => (
            <Recipe key={i} item={item} />
          )}
          maxToRenderPerBatch={2}
          updateCellsBatchingPeriod={2}
          initialNumToRender={3}
          onEndReachedThreshold={0.2}
        />
      </SafeAreaView>
    );
  }
}

export default Feed;
