import React from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image style={styles.menu} source={require('../icons/sidebar.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../icons/fudFeedLogo.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.camera} source={require('../icons/camera.jpg')}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menu: {
    height: 45,
    width: 45
  },
  logo: {
    height: 40,
    width: 40
  },
  camera: {
    height: 35,
    width: 35
  },
}

export default Header;