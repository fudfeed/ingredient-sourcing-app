import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableHighlight, AppRegistry, Button } from 'react-native';
import { CameraRoll } from 'react-native';
import Header from './header.js';
import { Camera } from 'react-native-camera';

// const Input = (props) => {
//   return (
//     <Fragment>
//       <SafeAreaView>
//       <Header handleMenu={props.navigation.openDrawer} />
//       <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
//       </ScrollView>
//       <View>
//         <Text>This is Input</Text>
//       </View>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(allPhotos => {
        this.setState({ photos: allPhotos.edges }, () => console.log('allPhotos:', this.state.photos));
      })
      .catch((err) => {
        console.log('this is err', err);
      });
  };

  render() {
    return (
      <SafeAreaView>
        <Header handleMenu={this.props.navigation.openDrawer} />
        <View>
          {/* <Text>This is some shit</Text> */}
        </View>
        <View>
          <Button onPress={this.handleButtonPress} title='photos'></Button>
          <ScrollView>
            {this.state.photos.map((photo, idx) => {
              return (
                <Image key={idx} source={{ uri: photo.node.image.uri }} />
              )
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cameraType: ''
//     }
//     this.takePicture = this.takePicture.bind(this);
//   }

//   takePicture() {
//     const options = {};
//     this.camera.capture({ metadata: options })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//   }

//   render() {
//     return (
//       <View ref="cam"
//         style={styles.container}>
//         <Camera
//         ref={cam => {this.cam = cam}}
//         aspect={Camera.constants.Aspect.fill}>
//           <View>
//             <TouchableHighlight>
//               <Text>Flip</Text>
//             </TouchableHighlight>
//             <TouchableHighlight>
//               <Text onPress={this.takePicture}>Take</Text>
//             </TouchableHighlight>
//           </View>
//         </Camera>
//       </View>
//     );
//   }
// };

// export default class Input extends React.Component {
//   render() {
//     return (
//       <View>
//         <Camera
//         ref={(cam) => {
//           this.camera = cam
//         }}
//         >
//         <Text onPress={this.takePicture.bind(this)}>
//         [CAPTURE_IMAGE]
//         </Text>
//         </Camera>
//       </View>
//     )
//   }

//   takePicture() {
//     const options =  {};
//     this.camera.capture({metadata: options}).then((data) => {
//       console.log(data);
//     }).catch((error) => {
//       console.log(error);
//     })
//   }
// }
// AppRegistry.registerComponent('cameraTutorial')

/*
      <Camera
        ref="cam"
        style={styles.container}>
        <View>
          <TouchableHighlight>
            <Text>Flip</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text>Take</Text>
          </TouchableHighlight>
        </View>
      </Camera>
*/

// export default Input;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   }
// })



/*
to use header
import Header from './header.js';
<Header />
<ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
*/

export default Input;