import React from 'react'
import { View, Text } from 'react-native';
import FilterLink from '../containers/FilterLink'


const Footer = () => (
  <View>
    <Text>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </Text>
  </View>
)

export default Footer;
