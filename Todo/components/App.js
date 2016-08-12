import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { View, Text, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.todo}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)

const styles = StyleSheet.create({
  todo: {
    justifyContent: 'center',
    marginBottom: 5,
  }
});

export default App
