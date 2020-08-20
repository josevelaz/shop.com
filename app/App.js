import "react-native-gesture-handler"
import React, { useEffect, useState } from "react"
import { Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { RootNavigator } from "./navigation"
import SplashScreen from "react-native-splash-screen"
import useFetch from "use-http"
import { API_KEY, API_URL } from "@env"
import CategoriesContext from "./utils/Context"
import { SafeAreaProvider, initialWindowSafeAreaInsets } from "react-native-safe-area-context"
import { navigationRef } from "./utils/NavigationHelper"
import AsyncStorage from "@react-native-community/async-storage"
import Onboarding from "react-native-onboarding-swiper"
import { color } from "./theme"
import { SvgCssUri } from "react-native-svg"

const App = () => {
  const [onboard, setOnboard] = useState("")
  /**
   * Fetch all initial categories
   */
  const { loading, error, data = [] } = useFetch(
    `${API_URL}/AffiliatePublisherNetwork/v2/categories?publisherId=TEST&locale=en_US`,
    {
      headers: { api_key: API_KEY },
    },
    [],
  )
  useEffect(() => {
    /**
     * Once all categories have been fetch, hide the Splashscreen
     */
    if (data.categories) {
      SplashScreen.hide()
    }
  }, [data])

  /**
   * Function to check if the user is opening the application for the first time
   */
  const getOnboard = async () => {
    const onboard = await AsyncStorage.getItem("onboard")
    setOnboard(onboard)
  }

  useEffect(() => {
    getOnboard()
  }, [])

  /**
   * If the onboard has been sucessfully completed, initiallize  The navigation, safe area provider and the context provider
   */
  if (onboard === "done")
    return (
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <CategoriesContext.Provider value={data.categories}>
            <RootNavigator />
          </CategoriesContext.Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    )
  else
    return (
      <Onboarding
        bottomBarHighlight={false}
        skipToPage={2}
        onDone={async () => {
          await AsyncStorage.setItem("onboard", "done")
          setOnboard("done")
        }}
        pages={[
          {
            image: (
              <SvgCssUri
                uri="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"
                height={100}
                width="100%"
              />
            ),
            backgroundColor: color.background,
            title: "Welcome to SHOP.COM",
            subtitle: "Online Marketplace: Clothes, Shoes, Beauty, Electronics and More!",
          },
          {
            image: (
              <Image
                source={require("./assets/categories-image.png")}
                style={{ width: 300, height: 400, borderRadius: 20 }}
              />
            ),
            backgroundColor: color.primary,
            title: "Browse our Inventory",
            subtitle: "Browse a category or search for a specific item",
          },
          {
            image: (
              <Image
                source={require("./assets/share-image.png")}
                style={{ width: 300, height: 400, borderRadius: 20 }}
              />
            ),
            backgroundColor: color.background,
            title: "Share cool finds with friends!",
            subtitle: "Hold on an item to share with family and friends.",
          },
        ]}
      />
    )
}

export default App
