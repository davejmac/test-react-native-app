import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { View } from 'react-native';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <View>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </View>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
