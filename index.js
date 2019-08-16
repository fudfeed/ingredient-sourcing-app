/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillUpdate is deprecated',
]);

AppRegistry.registerComponent(appName, () => App);
