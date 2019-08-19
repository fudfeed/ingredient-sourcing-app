import { Container, Content, Text } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Form4u from 'react-native-form4u';
import formFields from './formConfig/formFields';
import validationRules from './formConfig/validationRules';
import axios from 'axios';

const Form = (props) => {

  const handleSubmit = (state) => {
    const {name, ingredients, instructions, hashtags, source, photo} = state;
    const chef = {
      name: 'Wayne',
      avatar: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/1501298_10152927112776522_1833154138514612679_o.jpg?_nc_cat=105&_nc_oc=AQkCqTzcEn9UYTl1cnLvUffNCg964txqK5V-0sVSTZbom2KQPHBQAgDSnZeJv6J1vOY&_nc_ht=scontent-dfw5-1.xx&oh=7db92de80873dc1d290f0c578c1edd9e&oe=5DD89EC4'
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
      chef,
      name: name.value,
      ingredients: ingArr,
      instructions: instructions.value,
      date,
      hashtags: hashtags.value,
      photo: props.photo
    }
    axios.post('http://localhost:3000/recipes', { payload })
      .then((data) => {
        props.navi.navigate('Feed', { recipePost: payload })
      })
      .catch(err => console.warn(err))
    };

  return (
    <Container style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Content>
          <Text style={styles.textStyle}>Enter Recipe</Text>
          <Form4u
            formFields={formFields}
            handleSubmit={handleSubmit}
            validation={validationRules}
            submitOnDirty
          />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'cornsilk'
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
});

export default Form;