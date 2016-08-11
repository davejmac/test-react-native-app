import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let store = createStore(todoApp)

class TDN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={styles.todo}>
          <Provider store={store}>
            <App />
          </Provider>
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
