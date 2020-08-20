import { createRef } from "react"

export const navigationRef = createRef()

/**
 * Navigation helper used to navigate throughout the application without using the navigation prop
 */
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}
