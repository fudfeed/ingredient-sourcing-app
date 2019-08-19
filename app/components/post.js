import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity, Image, YellowBox } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Form from './form.js'

// export default Input;
YellowBox.ignoreWarnings([
  'Warning: c',
  'Warning: U'
]);

class Post extends React.Component {

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
        <View style={styles.cameraContainer}>
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
          <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} >
              <Text style={{ fontSize: 16, fontWeight: '600' }} > Capture </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Image style={{ height: 300, width: 350, margin: 12,}} source={require('../icons/foodgallery.png')}></Image>
        </View>
      </Fragment>
    )
  }

  renderPhotoView = () => {
    return (
      <Fragment>
        <SafeAreaView  >
          <View style={{backgroundColor: '#C4C4C4'}}>
            <Image
              style={styles.photo}
              source={{ uri: this.state.photo }}
            />
            <View style={styles.outerContainer}>
              <View style={styles.buttonContainer} >
                <TouchableOpacity
                  onPress={() => this.setState({ view: 'camera' })}
                  style={styles.capture2}
                >
                  <Text style={{ fontSize: 16, fontWeight: '600' }} > Take a New Photo </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer} >
                <TouchableOpacity
                  onPress={() => this.setState({ view: 'recipe' })}
                  style={styles.capture2}
                >
                  <Text style={{ fontSize: 16, fontWeight: '600' }} > Enter Recipe </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }

  renderFormView = () => {
    return (
      <Fragment>
        <Form photo={this.state.photo} navi={this.props.navigation} />
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
  cameraContainer: {
    flexDirection: 'column',
    backgroundColor: '#C4C4C4',
    height: 380,
    width: 400
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  outerContainer: {
    height: 500,
    backgroundColor: '#C4C4C4',
    marginTop: 100
  },
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#ffd862',
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 20,
    margin: 20,
    marginRight: 50
  },
  capture2: {
    flex: 0,
    backgroundColor: '#ffd862',
    width: 200,
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 20,
    margin: 20,
    alignItems: 'center'
  },
  photo: {
    alignSelf: 'center',
    height: 400,
    width: 400,
    marginTop: -100
  }
});

export default Post;
