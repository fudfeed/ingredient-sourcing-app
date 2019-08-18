/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import DrawerNavi from './drawerNav';



export default class MotherShip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DrawerNavi />
    )
  }
}
