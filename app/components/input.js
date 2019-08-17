import React, { Fragment, PureComponent } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableHighlight, AppRegistry, Button, TouchableOpacity } from 'react-native';
import Header from './header.js';
import { RNCamera } from 'react-native-camera';



// export default Input;


class Input extends React.Component {
  construtor(props) {
    state = {
      photo: ''
    }
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        photo: data.uri
      }, () => console.warn(this.state.photo))
    }
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView>
        <Header handleMenu={this.props.navigation.openDrawer} />
        <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
        </ScrollView>
        </SafeAreaView>
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> CLICK </Text>
            </TouchableOpacity>
          </View>
        </View>


      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Input;

// const Input = (props) => {
//   return (
//     <Fragment>
//       <SafeAreaView>
//         <Header handleMenu={props.navigation.openDrawer} />
//         <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
//         </ScrollView>
//         <View>
//           <Text>This is Input</Text>
//         </View>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

/*
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
          <Text>This is some shit</Text>
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
*/