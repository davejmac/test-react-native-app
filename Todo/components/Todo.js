import React, { PropTypes } from 'react'
import { View, Text } from 'react-native';

const Todo = ({ onClick, completed, text }) => (
  <View
    onClick={onCLick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Text>{text}</Text>
  </View>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
