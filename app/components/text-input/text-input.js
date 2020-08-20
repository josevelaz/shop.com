import React, { useState, useEffect } from "react"
import { View, TextInput as RootTextInput, Alert, Pressable } from "react-native"
import { color, spacing } from "../../theme"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { navigate } from "../../utils/NavigationHelper"

const CONTAINER = {
  flexDirection: "row",
  alignSelf: "center",
  alignItems: "center",
  height: 40,
  width: wp(70),
  marginBottom: spacing[2],
  backgroundColor: color.darkerBackground,
  borderRadius: 100,
  paddingHorizontal: 15,
}

const ROOT_INPUT_STYLE = {
  flex: 9,
  height: "100%",
}

/**
 * HOC Text input with a search button within it.
 */
export function TextInput(props) {
  const { style, rootInputStyle, returnKeyType } = props
  const [searchTerm, setSearchTerm] = useState("")

  const disableSearch = searchTerm.length === 0

  // Navigates to search result screens with searchTerm
  const onSearch = () => {
    navigate("search-navigator", {
      screen: "search-result",
      params: { searchTerm },
    })
  }

  return (
    <View style={[CONTAINER, style]}>
      <RootTextInput
        placeholder="Search..."
        style={[ROOT_INPUT_STYLE, rootInputStyle]}
        returnKeyType={returnKeyType || "search"}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={onSearch}
        enablesReturnKeyAutomatically
      />
      <IconButton onPress={onSearch} disabled={disableSearch} />
    </View>
  )
}

/**
 * Custom button component with an icon within
 */
function IconButton(props) {
  return (
    <Pressable {...props}>
      <FontAwesome5 name="search" size={24} color={color.palette.black} />
    </Pressable>
  )
}
