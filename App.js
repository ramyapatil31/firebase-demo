
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddItem from './src/components/AddItem';
// import SignUp from './src/components/SignUp';
// import RouterConfig from './src/routes';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <AddItem/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
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
