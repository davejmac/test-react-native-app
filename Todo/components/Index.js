import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers'
import App from './App'

let store = createStore(todoApp)

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Index
