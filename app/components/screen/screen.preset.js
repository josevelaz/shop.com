import { color } from "../../theme"

export const presets = {
  fixed: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: "100%",
    },
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      width: "100%",
      height: "100%",
    },
  },
  scroll: {
    outer: {
      backgroundColor: color.darkerBackground,
      flex: 1,
      height: "100%",
    },
    inner: { justifyContent: "flex-start", alignItems: "center" },
  },
}
