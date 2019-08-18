import React, { Fragment, PureComponent } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableHighlight, AppRegistry, Button, TouchableOpacity, Image, YellowBox } from 'react-native';
import Header from './header.js';
import { RNCamera } from 'react-native-camera';
import Form from './form.js'

// export default Input;
YellowBox.ignoreWarnings([
  'Warning: c',
  'Warning: U'
]);

class Input extends React.Component {
  // construtor(props) {
  //   state = {
  //     photo: '',
  //     view: 'camera'
  //   }
  //   // this.renderCameraView = this.renderCameraView.bind(this)
  // }

  state = {
      photo: '',
      view: 'camera'
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        photo: data.uri,
        view: 'photo'
      })
    }
  };

  renderCameraView = () => {
    return (
      <Fragment>
        {/* <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false} >
          </ScrollView>
        </SafeAreaView> */}
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
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }} >
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} >
              <Text style={{ fontSize: 14 }} > Capture </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.container2}></View> */}
      </Fragment>
    )
  }

  renderPhotoView = () => {
    return (
      <Fragment>
        <SafeAreaView>
          {/* <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
          </ScrollView> */}
          <View >
            <Image
              style={styles.photo}
              source={{uri: this.state.photo}}
              />
            <Button 
              onPress={() => this.setState({ view: 'camera' })}
              title="Take a New Photo"
            />
            <Button
              onPress={() => this.setState({ view: 'recipe' })}
              title="Enter Recipe"
            />
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }

  renderFormView = () => {
    return (
      <Fragment>
        {/* <SafeAreaView>
          <Header handleMenu={this.props.navigation.openDrawer} />
          <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
          </ScrollView>
        </SafeAreaView> */}
        <Form photo={this.state.photo} navi={this.props.navigation}/>
      </Fragment>
    )
  }

  render() {
      return (
        <Fragment>
          {(this.state.view === 'camera') ? this.renderCameraView()
            : (this.state.view === 'photo') ? this.renderPhotoView()
            : (this.state.view === 'recipe') ? this.renderFormView()
            : <Text>{this.state.photo}</Text>}
        </Fragment>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    flexDirection: 'column',
    backgroundColor: '#999',
    height: 380,
    width: 400
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
  photo: {
    alignSelf: 'center',
    height: 400,
    width: 400,
    marginTop: -100
  }
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