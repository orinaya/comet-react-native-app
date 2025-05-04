import { memo } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'

const { width } = Dimensions.get('screen')

function PaginationDot ({ index, scrollX, isActive }) {
  const animatedStyle = useAnimatedStyle(() => {
    const dotWidth = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [8, 20, 8],
      Extrapolation.CLAMP
    )
    return {
      width: dotWidth
    }
  }, [scrollX])

  return (
    <Animated.View
      style={[
        styles.dot,
        animatedStyle,
        {
          backgroundColor: isActive
            ? 'hsla(0, 0%, 100%, 1)'
            : 'hsla(0, 0%, 100%, 0.6)'
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    marginHorizontal: 4,
    borderRadius: 8
  }
})

export default memo(PaginationDot)
