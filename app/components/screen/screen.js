import React from "react"
import { KeyboardAvoidingView, Platform, StatusBar, View } from "react-native"
import { useSafeArea } from "react-native-safe-area-context"
import { presets } from "./screen.preset"
import { ScrollView } from "react-native-gesture-handler"

const isIos = Platform.OS === "ios"

/**
 * Screen component with no scrolling
 */
function ScreenWithoutScrolling(props) {
  const insets = useSafeArea()
  const preset = presets.fixed
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor && { backgroundColor: props.backgroundColor }
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }

  return (
    <KeyboardAvoidingView style={[preset.outer, backgroundStyle]} behavior={isIos && "padding"}>
      <StatusBar barStyle={props.statusbar || "dark-content"} />
      <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
    </KeyboardAvoidingView>
  )
}

/**
 * Screen with scrollview inner component
 */
function ScreenWithScrolling(props) {
  const insets = useSafeArea()
  const preset = presets.scroll
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor && { backgroundColor: props.backgroundColor }
  const insetStyle = { paddingBottom: props.unsafe ? 0 : insets.bottom }

  return (
    <KeyboardAvoidingView style={[preset.outer, backgroundStyle]} behavior={isIos && "padding"}>
      <StatusBar barStyle={props.statusbar || "dark-content"} />
      <ScrollView
        style={[style, insetStyle]}
        contentContainerStyle={[preset.inner, props.innerStyle]}
      >
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

/**
 * Main screen function that exports component depending on @param scroll prop
 */
export function Screen(props) {
  if (props.scroll) return <ScreenWithScrolling {...props} />
  else return <ScreenWithoutScrolling {...props} />
}
