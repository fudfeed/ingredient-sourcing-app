import { Container, Content, Text } from 'native-base';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import Form4u from 'react-native-form4u';
import formFields from './formConfig/formFields';
import validationRules from './formConfig/validationRules';
import axios from 'axios'
import faker from 'faker'

const Form = (props) => {

  const handleSubmit = (state) => {
    const {name, ingredients, instructions, hashtags, source, photo} = state;
    const chef = {
      name: faker.internet.userName(),
      avatar: faker.image.avatar()
    }
    let ingArr = ingredients.value.split(', ');
    for (let i = 0; i < ingArr.length; i++) {
      ingArr[i] = {
        name: ingArr[i].split(' ')[2],
        quantity: ingArr[i],
        source: source.value
      }
    }
    const date = Date.now()
    const payload = {
      id: 442,
      chef,
      name: name.value,
      ingredients: ingArr,
      instructions: instructions.value,
      date,
      hashtags: hashtags.value,
      photo: props.photo
    }
    // console.warn(payload)
    axios.post('http://localhost:3000/recipes', { payload })
      .then((data) => {
        // console.warn(`Posted ${JSON.stringify(payload)}`)
      })
      .catch(err => console.warn(err))
    props.navi.navigate('Feed', { params: payload })
    };

  // const postLoad = async (payload) => {
  //   try {
  //     let response = await fetch('http://localhost:3000/recipes', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });
  //     let responseJson = await response.json();
  //     return responseJson;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <Container style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Content>
          <Text style={styles.textStyle}>Enter Recipe</Text>
          <Form4u
            formFields={formFields}
            handleSubmit={handleSubmit}
            validation={validationRules}
          />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#3F4EA5'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: '#3F4EA5'
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    // color: '#FFF'
  },
});

export default Form;