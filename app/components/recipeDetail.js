import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native';


class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  render() {
    return (
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.subTitles}>Ingredients</Text>
          {this.props.item.ingredients.map((ingredient, key) => {
            return (
              <Text key={key}>{ingredient.quantity}</Text>
            );
          })}
        </View>
        <View style={styles.description}>
          <Text style={styles.subTitles}>Instructions</Text>
          <Text>{this.props.item.instructions}</Text>
        </View>
        <View style={styles.description}>
          {this.props.item.comments.length > 0 && <Text style={styles.subTitles}>Comments</Text>}
          {this.props.item.comments.map((comment, key) => {
            return (
              <View key={key} style={styles.comments}>
                <Text style={styles.commentUser}>
                  <Text style={styles.commentUsername}>{comment.chef.name}</Text>
                  {comment.rating === 5 && <Text style={styles.rating}>⭑⭑⭑⭑⭑</Text>}
                  {comment.rating === 4 && <Text style={styles.rating}>⭑⭑⭑⭑⭒</Text>}
                  {comment.rating === 3 && <Text style={styles.rating}>⭑⭑⭑⭒⭒</Text>}
                  {comment.rating === 2 && <Text style={styles.rating}>⭑⭑⭒⭒⭒</Text>}
                  {comment.rating === 1 && <Text style={styles.rating}>⭑⭒⭒⭒⭒</Text>}
                  {comment.rating === 0 && <Text style={styles.rating}>⭒⭒⭒⭒⭒</Text>}
                </Text>
                <Text>{comment.date}</Text>
                <Text>{comment.body}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  comments: {
    borderTopColor: '#999',
    borderTopWidth: 1,
    paddingBottom: 5
  },
  commentUserName: {
    fontWeight: "500",
    paddingRight: 15
  },
  subTitles: {
    fontWeight: "600"
  }
})

export default RecipeDetail;