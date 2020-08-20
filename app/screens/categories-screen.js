import React, { useEffect } from "react"
import { Text, View, Pressable } from "react-native"
import { Screen, TextInput } from "../components"
import { SvgCssUri } from "react-native-svg"
import CategoriesContext from "../utils/Context"
import { H1, P4, color } from "../theme"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { FlatList } from "react-native-gesture-handler"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const LOGO = {
  marginVertical: 15,
}
const HEADER = {
  textAlign: "center",
}
const CONTAINER = {
  flex: 1,
}

const CONTENT_CONTAINER = {
  paddingBottom: 15,
}

const CARD = {
  width: "100%",
  borderRadius: 10,
  paddingHorizontal: 25,
  paddingVertical: 10,
  justifyContent: "center",
}

const DIVIDER = {
  height: 1,
  width: "100%",
  backgroundColor: color.line,
  marginTop: 5,
}

export const CategoriesScreen = ({ navigation }) => {
  /**
   * Category card used to search all products in a category with the press of a button
   */
  const CategoryCard = ({ item }) => {
    return (
      <Pressable
        style={CARD}
        onPress={() =>
          navigation.navigate("search-navigator", {
            screen: "search-result",
            params: { name: item.name, href: item.links[0].href },
          })
        }
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
        >
          <Text style={P4}>{item.name}</Text>
          <FontAwesome5 name="chevron-right" size={P4.fontSize} color={color.palette.black} />
        </View>
        <View style={DIVIDER} />
      </Pressable>
    )
  }
  // Main Screen Component
  return (
    <Screen unsafe>
      <SvgCssUri
        uri="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"
        height={70}
        style={LOGO}
      />
      <Text style={[H1, HEADER]}>Categories</Text>
      <CategoriesContext.Consumer>
        {(categories) => (
          <FlatList
            style={CONTAINER}
            data={categories}
            contentContainerStyle={CONTENT_CONTAINER}
            renderItem={CategoryCard}
          />
        )}
      </CategoriesContext.Consumer>
    </Screen>
  )
}
