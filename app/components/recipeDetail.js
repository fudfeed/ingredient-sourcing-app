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
      item: [],
      displayComments: false
    };
  }

  render() {
    let { navigation } = this.props;
    let item = navigation.getParam('item', 'hithere');
    // console.warn('X:', navigation);
    return (
      <View>
        <Text>
          hi!
          {JSON.stringify(item)}
        </Text>
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