import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { View, TextInput } from 'react-native';

let AddTodo = ({ dispatch }) => {
  let input = ''

  return (
    <View>
      <TextInput
        onSubmitEditing={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        value={input.value}
      />
    </View>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
