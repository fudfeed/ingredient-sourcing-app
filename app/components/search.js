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
      searchValue: [],
      stores: [],
      recipes: [],
      fieldCount: ['']
    };
    this.searchByStore = this.searchByStore.bind(this);
    this.searchByRecipe = this.searchByRecipe.bind(this);
    this.addFields = this.addFields.bind(this);
    this.pushIntoSearchArray = this.pushIntoSearchArray.bind(this);
  }

  //searchByStore gets called when the Search By Stores button is pressed
  //sends a request to the server to query by text in the input field
  searchByStore(ingredient) {
    axios.get(`http://localhost:3000/search/stores?ingredient=${ingredient}`)
      .then((store) => {
        this.setState({
          stores: store
        });
      })
      .catch((error) => {
        console.log('failed to search ingredient by store', error);
      })
  }

  //SearchByRecipe gets called when Search By Recipe button is pressed
  //sends a request to the server to query by text in the input field
  searchByRecipe(ingredient) {
    axios.get(`http://localhost:3000/search/recipes?ingredient=${ingredient}`)
      .then((recipes) => {
        this.setState({
          recipes: recipes
        }, () => {
          this.props.navigation.navigate('Feed', {recipeSearch: this.state.recipes})
        })
      })
      .catch((error) => {
        console.log('failed to search by recipe', error);
      })
  }

  //this function adds more ingredient input fields
  addFields() {
    let newCount = this.state.fieldCount;
    newCount.push('');
    this.setState({
      fieldCount: newCount
    })
  }

  //this function will push the text in the search fields into an array so that they
  //can be parsed into queries to be sent through by axios
  pushIntoSearchArray(txt) {
    let newArray = [...this.state.searchValue];
    newArray.push(txt);
    this.setState({
      searchValue: newArray
    })
  }


  render() {
    return (
      <Fragment>
        <SafeAreaView>
          {/* <Header handleMenu={this.props.navigation.openDrawer} /> */}
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
            {/* start of component container */}
            <View style={styles.component}>
              {/* start of search field container */}
              {this.state.fieldCount.map((x, index) => {
                return (
                  <View style={styles.searchBox} id={index}>
                    <TextInput autoCapitalize='none' onEndEditing={(e) => this.pushIntoSearchArray(e.nativeEvent.text)} key={index} placeholder='add an ingredient!' style={styles.searchField}></TextInput>  
                  </View>
                )
              })}
              {/* end of search field container */}
              {/* start of advanced search container */}
              <View >
                <Button onPress={this.addFields} title="add more ingredients"></Button>
              </View>
              {/* end of advanced search container */}
              {/* start of search button container */}
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
              {/* end of search button container */}
              {/* start of results container */}
              <View>
                {this.state.stores ?
                  <FlatList
                    data={this.state.stores}
                    renderItem={(store) => {
                      { console.warn('hits here') }
                      <View>
                        <Text>{store.name}</Text>
                        <Text>{store.score}</Text>
                      </View>
                    }}
                  >
                  </FlatList> : null
                }
              </View>
              {/*end of results container */}
            </View>
            {/* end of component container */}
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
    marginLeft: 37,
    paddingBottom: 10
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
    marginTop: 150
  },
  resultsContainer: {
    alignContent: 'center',
  },
  advancedSearch: {
    fontSize: 12,
    paddingLeft: 228,
    paddingTop: 5
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