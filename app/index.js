/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Feed from './components/feed.js'
import Input from './components/input.js';
import fudMap from './components/map.js';
import Search from './components/search.js';

const DrawerNavigator = createDrawerNavigator(
  {
    'füdfeed': Feed,
    'search füd': Search,
    'input füd': Input,
    'füd map': fudMap,
  },
  {
    initialRouteName: 'search füd',
    drawerType: 'front',
    hideStatusBar: true,
    drawerBackgroundColor: 'cornsilk', //'rgba(253, 248, 220, 0.9)', //#fdf8dc
    overlayColor: '#888888',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#FFC966',
    },
  },
);

// const App = () => {
//   return (
//     <Fragment>
//       <SafeAreaView>
//         <ScrollView>
//           <View>
//             <Chris />
//             <Jeremy />
//             <Kristina />
//             <Wayne />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
export default createAppContainer(DrawerNavigator);
