import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SearchResultsScreen } from "../screens"

const { Navigator, Screen } = createStackNavigator()

export const SearchStack = () => (
  <Navigator initialRouteName="search-result">
    <Screen name="search-result" component={SearchResultsScreen} />
  </Navigator>
)
