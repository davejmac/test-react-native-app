import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

const Link = ({ active, children, onPress }) => {
  if (active) {
    return <View>{children}</View>
  }

  return (
    <Text
      onPress={e => {
        e.preventDefault()
        onPress()
      }}
    >
      {children}
    </Text>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Link
