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
      displayComments: false
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
  subTitles: {
    fontWeight: "600"
  }
})

export default RecipeDetail;