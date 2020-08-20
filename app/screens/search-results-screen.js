import React, { useEffect } from "react"
import { Text } from "react-native"
import { Screen } from "../components"
import useFetch from "use-http"
import { API_KEY, API_URL } from "@env"
import { Card } from "../components/card/card"
import { color, H1, spacing } from "../theme"

export const SearchResultsScreen = (props) => {
  const { href, name, searchTerm } = props.route.params
  /**
   * @param URI variable that selects weather to get products from a search term or from a category
   */
  const URI = searchTerm
    ? `${API_URL}/AffiliatePublisherNetwork/v2/products?publisherId=TEST&locale=en_US&term=${searchTerm}`
    : `${API_URL}/${href}`

  /**
   * useFetch() hook retrieves all data from the given URI
   */
  const { loading, error, data = [] } = useFetch(
    URI,
    {
      headers: { api_key: API_KEY },
    },
    [],
  )

  const { products } = data

  return (
    <Screen scroll>
      {loading ? (
        <Text>The Products are loading</Text>
      ) : (
        products.map((v, i) => <Card data={v} key={`card-${v.name}`} />)
      )}
    </Screen>
  )
}
