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
  Button,
  FlatList
} from 'react-native';
import Header from './header.js';
import axios from 'axios';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      stores: [],
      recipes: []
    };
    // this.handleChange = this.handleChange.bind(this);
    this.searchByStore = this.searchByStore.bind(this);
    this.searchByRecipe = this.searchByRecipe.bind(this);
  }

  //searchByStore gets called when the Search By Stores button is pressed
  //sends a request to the server to query by text in the input field
  searchByStore(ingredient) {
    axios.get(`/stores/${ingredient}`)
      .then((store) => {
        this.setState({
          stores: [...store]
        });
      })
      .catch((error) => {
        console.log('failed to search ingredient by store', error);
      })
  }

  //SearchByRecipe gets called when Search By Recipe button is pressed
  //sends a request to the server to query by text in the input field
  searchByRecipe(ingredient) {
    axios.get(`/recipes/${ingredient}`)
      .then((recipes) => {
        this.setState({
          recipes: [...recipes]
        })
      })
      .catch((error) => {
        console.log('failed to search by recipe', error);
      })
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
            <View style={styles.component}>
              <View style={styles.searchBox}>
                <TextInput placeholder='what are you feeling today?' style={styles.searchField} onChangeText={(text) => this.setState({searchValue: text})}></TextInput>
              </View>
              <View style={styles.buttonContainer}>
                <View>
                  <Button onPress={() => { this.searchByRecipe(this.state.searchValue) }} title="search by recipe">
                  </Button>
                </View>
                <View>
                  <Button onPress={() => this.searchByStore(this.state.searchValue)} title="search by store">
                  </Button>
                </View>
              </View>
              {/*Below for results container */}
              <View>
                {this.state.stores ?
                  <FlatList
                    data={this.state.stores}
                    renderItem={(store) => {
                      {console.warn('hits here')}
                      <View>
                        <Text>{store.name}</Text>
                        <Text>{store.score}</Text>
                      </View>
                    }}
                  >
                  </FlatList> : null
                }
              </View>
              {/*End of results container */}
            </View>
          </ScrollView>
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
  },
  resultsContainer: {
    alignContent: 'center',
  }
});

export default Search;

/*
to use header
import Header from './header.js';
<Header />
<ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
*/

//search the /recipes for the dish name
//pull the name under all ingredients