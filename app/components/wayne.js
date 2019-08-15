import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
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
        <View style={styles.searchBox}>
          <TextInput placeholder='Type anything!' style={styles.searchField}></TextInput>
        </View>
          <View style={styles.component}>
            <View style={styles.margin}>
              <TouchableOpacity style={styles.whereuat}>
                <Text style={styles.leftButton}>Search By Recipe</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.whereuat2}>
                <Text style={styles.rightButton}>Search By Stores</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

// const SearchRecipe = () => {
//   return (
//     <Fragment>
//       {/* <SafeAreaView>
//         <ScrollView>
//           <View> */}
//       <SafeAreaView>
//       <View style={styles.searchInput}>
//         <TextInput style={styles.disappearingText}>What are you searching for today?</TextInput>
//       </View>
//         <View style={styles.component}>
//           <View style={styles.margin}>
//             <TouchableOpacity style={styles.whereuat}>
//               <Text style={styles.leftButton}>Search By Recipe</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity style={styles.whereuat2}>
//               <Text style={styles.rightButton}>Search By Stores</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//       {/* </View>
//         </ScrollView>
//       </SafeAreaView> */}
//     </Fragment>
//   );
// };

//812 is the true height of an iphone x

const styles = StyleSheet.create({
  component: {
    height: 812,
    width: 375,
    // backgroundColor: '#f8ebcd',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftButton: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    height: 50,
    alignItems: 'center',
  },
  rightButton: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    height: 50,
    alignItems: 'center'
  },
  whereuat: {
    backgroundColor: '#f8ebcd'
  },
  whereuat2: {
    backgroundColor: 'white'
  },
  margin: {
    marginRight: 10,
    alignItems: 'center',
    textAlign: 'center'
  },
  searchBox: {
    alignItems: 'center',
    width: 300,
    justifyContent: 'center',
    marginLeft: 37,
    backgroundColor: 'red'
  },
  searchField: {
    borderWidth: 1,
    color: 'black',
    fontStyle: 'italic',
    width: 300,
    height: 50,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default SearchRecipe;