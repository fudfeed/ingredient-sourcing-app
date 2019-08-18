import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import Comments from './comments.js'
import RecipeDetail from './recipeDetail.js';


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      displayRecipe: false,
      displayComments: false
    };
    this.displayRating = this.displayRating.bind(this);
    this.handleRecipeOnPress = this.handleRecipeOnPress.bind(this);
    this.handleCommentOnPress = this.handleCommentOnPress.bind(this);
    this.displayRecipeDetail = this.displayRecipeDetail.bind(this);
    this.displayComments = this.displayComments.bind(this);
  }

  handleRecipeOnPress = () => {
    this.setState({
      displayRecipe: !this.state.displayRecipe
    })
  }

  handleCommentOnPress = () => {
    this.setState({
      displayComments: !this.state.displayComments
    })
  }

  displayRecipeDetail = () => {
    if (this.state.displayRecipe) {
      return (
        <RecipeDetail item={this.props.item}/>
      );
    } else {
      return (
        <View style={styles.collapsable}>
          <TouchableOpacity onPress={this.handleRecipeOnPress}>
            <Text style={styles.collapsableText}>View Recipe</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  displayComments = () => {
    if (this.props.item.comments.length > 0) {
      if (this.state.displayComments) {
        return (
          <Comments comments={this.props.item.comments} />
        )
      } else {
        return (
          <View style={styles.collapsable}>
            <TouchableOpacity onPress={this.handleCommentOnPress}>
              <Text style={styles.collapsableText}>{`See all ${this.props.item.comments.length} comments`}</Text>
            </TouchableOpacity>
          </View>
        )
      }
    }
  }

  displayRating = (comments) => {
    if (comments.length > 0) {
      let sum = 0;
      let rating;
      for (let i = 0; i < comments.length; i++) {
        sum += comments[i].rating;
      }
      rating = Math.ceil(sum / comments.length);
      this.setState({ rating });
    }
  }

  componentDidMount() {
    this.displayRating(this.props.item.comments)
  }

  render() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.item.name}</Text>
          {this.state.rating === 5 && <Text style={styles.rating}>⭑⭑⭑⭑⭑</Text>}
          {this.state.rating === 4 && <Text style={styles.rating}>⭑⭑⭑⭑⭒</Text>}
          {this.state.rating === 3 && <Text style={styles.rating}>⭑⭑⭑⭒⭒</Text>}
          {this.state.rating === 2 && <Text style={styles.rating}>⭑⭑⭒⭒⭒</Text>}
          {this.state.rating === 1 && <Text style={styles.rating}>⭑⭒⭒⭒⭒</Text>}
          {this.state.rating === 0 && <Text style={styles.rating}>⭒⭒⭒⭒⭒</Text>}
        </View>
        <TouchableOpacity onPress={this.handleRecipeOnPress}>
          <Image source={{ uri: this.props.item.photo }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.userContainer}>
          <Image source={{ uri: this.props.item.chef.avatar }} style={styles.avatar} />
          <Text style={styles.chef}>{this.props.item.chef.name}</Text>
        </View>
        {this.displayRecipeDetail()}
        {this.displayComments()}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: '#ffdb4b',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  rating: {
    fontSize: 20,
  },
  image: {
    width: 400,
    height: 300
  },
  userContainer: {
    backgroundColor: '#E8E8E8',
    padding: 5,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10
  },
  chef: {
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 5,
    paddingTop: 5
  },
  descriptionContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  comments: {
    padding: 10,
    paddingBottom: 5
  },
  commentUser: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commentUserName: {
    fontWeight: "500",
  },
  commentDate: {
    color: '#777',
    fontSize: 12,
    paddingTop: 5
  },
  subTitles: {
    fontWeight: "600"
  },
  collapsable: {
    margin: 10,
    marginLeft: 15,
  },
  collapsableText: {
    color: '#555'
  },
})

export default Recipe;