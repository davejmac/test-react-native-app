import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { View, Text } from 'react-native';

const App = () => (
  <View>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)

export default App
