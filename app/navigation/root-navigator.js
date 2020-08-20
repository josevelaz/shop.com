import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Text, Pressable, Alert } from "react-native"
import { CategoriesScreen } from "../screens/categories-screen"
import { SearchStack } from "./search-navigator"
import { TextInput } from "../components"
import { color, spacing } from "../theme"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const RootStack = createStackNavigator()
export const RootNavigator = () => (
  <RootStack.Navigator headerMode="screen">
    <RootStack.Screen
      name="categories"
      component={CategoriesScreen}
      options={{
        // Custom header title, replaced with text-input for searching products
        headerTitle: (props) => <TextInput />,
        headerStyle: { backgroundColor: color.primary },
      }}
    />
    <RootStack.Screen
      name="search-navigator"
      component={SearchStack}
      options={({ navigation, route }) => ({
        headerTitle: `Shopping for "${route.params.params.name || route.params.params.searchTerm}"`,
        headerLeft: () => (
          <Pressable onPress={() => navigation.pop()} style={{ marginLeft: spacing[5] }}>
            <FontAwesome5 name="home" size={24} color={color.primary} />
          </Pressable>
        ),
        headerStyle: { shadowColor: "transparent" },
        headerTintColor: color.primary,
      })}
    />
  </RootStack.Navigator>
)
