import React, { Component } from 'react';
import Index from './Todo/components/Index'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TDN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={styles.todo}>
          <Index />
        </View>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  todo: {
    justifyContent: 'center',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('TDN', () => TDN);
