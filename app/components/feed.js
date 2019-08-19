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

  fetchRecipes = () => {
    axios.get('http://localhost:3000/recipes')
      .then(({ data }) => {
        this.setState({
          feedData: data
        });
      })
      .catch((err) => {
        this.fetchRecipes();
      })
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  componentDidUpdate(prevProps) {
    let { navigation } = this.props;
    let recipeSearch = navigation.getParam('recipeSearch');
    let recipePost = navigation.getParam('recipePost');
    if (prevProps !== this.props) {
      if (recipeSearch) {
        this.setState({
          feedData: recipeSearch
        }, () => this.props.navigation.state.params.recipeSearch = null)
      } else if (recipePost) {
        this.props.navigation.state.params.recipePost = null;
        this.fetchRecipes();
      }
    }
  }

  render() {

    return (
      <SafeAreaView>
        <FlatList 
          contentContainerStyle={{}}
          data={this.state.feedData}
          keyExtractor={item => item.name.toString()}
          renderItem={({ item }, i) => (
            <Recipe key={i} item={item} navigation={this.props.navigation}/>
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
