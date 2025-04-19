/**
 * This file contains the animations for Flatlist component
 */
import { interpolate, Extrapolation } from 'react-native-reanimated'

const ITEM_WIDTH = 260
// Scale animation depending on the position in the scroll view
export const scaleAnimation = (udv, index) => {
  'worklet' // this directive is mandatry for Reanimated to run this code on UI thread
  return udv.value === null
    ? 0
    : interpolate(
      udv.value,
      [
        (index - 2) * ITEM_WIDTH,
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH,
        (index + 2) * ITEM_WIDTH
      ],
      [0.5, 0.8, 1, 0.8, 0.5], // scale factor depending on the proximity to the center
      Extrapolation.CLAMP
      // stops values between bounds (0.5 to 1)
    )
}

// Opacity animation depending on the position in the scroll view
export const opacityAnimation = (derivedValue, index) => {
  'worklet' // this directive is mandatory for Reanimated to run this code on UI thread

  return derivedValue.value === null
    ? 0
    : interpolate(
      derivedValue.value,
      [
        (index - 3) * ITEM_WIDTH,
        (index - 2) * ITEM_WIDTH,
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH,
        (index + 2) * ITEM_WIDTH,
        (index + 3) * ITEM_WIDTH
      ],
      [0, 0.5, 0.8, 1, 0.8, 0.5, 0], // scale factor depending on the proximity to the center
      Extrapolation.CLAMP // stops values between bounds (0 to 1)
    )
}
