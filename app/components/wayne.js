import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

class SearchRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView>
        <View style={styles.component}>
            <View style={styles.searchBox}>
              <TextInput placeholder='what are you feeling today?' style={styles.searchField}></TextInput>
            </View>
          <View style={styles.buttonContainer}>
            <View>
              <Button title="search by recipe">
              </Button>
            </View>
            <View>
              <Button title="search by store">
              </Button>
            </View>
          </View>
        </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({

  searchBox: {
    alignItems: 'center',
    width: 300,
    justifyContent: 'center',
    marginLeft: 37
  },
  searchField: {
    borderWidth: 1,
    color: 'black',
    fontStyle: 'italic',
    width: 300,
    height: 50,
    fontSize: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    // backgroundColor: '#f8ebcd',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  component: {
    justifyContent: 'flex-start',
    marginTop: 300
  }
});

export default SearchRecipe;