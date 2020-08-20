import React, { useRef } from "react"
import { View, Text, Pressable, Alert, Animated } from "react-native"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import FastImage from "react-native-fast-image"
import { spacing, color } from "../../theme"
import Share from "react-native-share"
import { navigate } from "../../utils/NavigationHelper"

/**
 * Main card component that displays basic information about a product like an image, name and price.
 */
export const Card = (props) => {
  const { data } = props
  const imgUri = data.image.sizes[2].url
  const shareURI = data.links[1].href
  const scaleValue = useRef(new Animated.Value(1)).current

  // Scale down card when pressed in
  const pressInAnim = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }
  // Scale up card when pressed out
  const pressOutAnim = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }
  return (
    <Pressable
      onPressIn={pressInAnim}
      onPressOut={pressOutAnim}
      onLongPress={async () => {
        try {
          const shareResponse = await Share.open({
            title: "Share via",
            message: `Look at this amazing product i found on SHOP.com\n${shareURI}`,
          })
          console.log(shareResponse)
        } catch (error) {}
      }}
    >
      <Animated.View style={[CONTAINER, { transform: [{ scale: scaleValue }] }]}>
        <View style={BOX_SHADOW}>
          <FastImage source={{ uri: imgUri }} style={IMG} resizeMode="contain" />
        </View>
        {data.brand ? <Text style={BRAND}>{data.brand}</Text> : null}
        <Text style={NAME}>{truncate(data.name)}</Text>
        <Price min={data.minimumPrice} max={data.maximumPrice} />
      </Animated.View>
    </Pressable>
  )
}

/**
 * Component to display the pricing of a item
 */
const Price = (props) => {
  const { max, min } = props
  return (
    <View style={PRICE_CONTAINER}>
      {min === max ? (
        <Text style={PRICE_TEXT}>${props.min}</Text>
      ) : (
        <>
          <Text style={PRICE_TEXT}>${props.min}</Text>
          <Text style={PRICE_TEXT}> - </Text>
          <Text style={PRICE_TEXT}>${props.max}</Text>
        </>
      )}
    </View>
  )
}

/**
 * Helper function to truncate string in case lenght is too long
 */
function truncate(input) {
  const MAX_LENGHT = 75
  if (input.length > MAX_LENGHT) {
    return input.substring(0, MAX_LENGHT) + "..."
  }
  return input
}

const PRICE_CONTAINER = {
  flexDirection: "row",
  marginTop: spacing[2],
}

const PRICE_TEXT = {
  fontWeight: "600",
  fontSize: 18,
}

const CONTAINER = {
  height: wp(75),
  width: wp(90),
  marginVertical: spacing[4],
}

const NAME = {
  marginTop: spacing[1],
  fontSize: 18,
  fontWeight: "500",
}

const BRAND = {
  marginTop: spacing[2],
  fontSize: 22,
  fontWeight: "600",
}

const IMG = {
  flex: 1,
  // borderWidth: 1,
  // borderColor: color.line,
}

const BOX_SHADOW = {
  flex: 1,
  borderRadius: 15,
  backgroundColor: color.background,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,

  elevation: 3,
}
