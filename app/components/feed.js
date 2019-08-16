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
import { TouchableOpacity } from "react-native-gesture-handler";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: []
    };
    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/impromptuu/1188a5c2b958f4e81f829bccc11cdd8a/raw/519437fdea6a024a691f9cdc7596da3f5f740f00/sampleRecipeData.txt')
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

  renderImages() {
    return (
      this.state.feedData.map((obj, i) => {
        return (
          <View key={`name_id_${i}`} style={styles.content}>
            <TouchableOpacity>
              <Image source={{uri: obj.photo}} style={{ width: 200, height: 200 }} />
            </TouchableOpacity>
            <Text>
            {obj.hashtags}

            </Text>
          </View>
        )
      })
    )
  }
  // this.state.feedData[0].chef.name
  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView>
            {
              this.state.feedData.length > 0 ? this.renderImages() : null
            }
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default Feed;
