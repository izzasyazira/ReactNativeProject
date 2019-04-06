/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, AppRegistry} from 'react-native';
import * as firebase from 'firebase';
import {input} from '.components/input';



type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    const firebaseConfig={
        apikey: 'AIzaSyD_xPFkOOPSv9UFlUB5IeB2eon14k7JbaY',
        authDomain:'rn-firebase-e376e.firebaseapp.com',
    }
      firebase.initializeApp(firebaseConfig);
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Input/>>

        <Text style={styles.welcome}>Welcome to Product Apps!</Text>
        <Text style={styles.instructions}>Project  react native </Text>
      
        
        <Button
      
           title="Create"
          color="#841584"
           accessibilityLabel="Learn more about this purple button" />

         <Button
      
           title="Update"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />

         <Button
      
          title="Read"
          color="#841584"
           accessibilityLabel="Learn more about this purple button" /> 

           <Button
      
          title="Delete"
          color="#841584"
           accessibilityLabel="Learn more about this purple button" />      


        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />   










      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
