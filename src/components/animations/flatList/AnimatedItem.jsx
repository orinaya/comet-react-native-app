import { StyleSheet } from 'react-native'
import Animated, {
  useDerivedValue,
  useAnimatedStyle
} from 'react-native-reanimated'
import { scaleAnimation, opacityAnimation } from './animations'
import PlanetsListItem from '../../planets/PlanetsListItem'

const ITEM_WIDTH = 260

function AnimatedItem ({ index, item, scrollX, onPress }) {
  const derivedValue = useDerivedValue(() => scrollX.value)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnimation(derivedValue, index),
      transform: [
        {
          scale: scaleAnimation(derivedValue, index)
        }
      ]
    }
  })
  return (
    <Animated.View
      style={
        [styles.box, animatedStyle,
          index === 0 && styles.firstChild,
          index === item.length - 1 && styles.lastChild
        ]
      }
      item={item}
    >
      <PlanetsListItem
        planet={item}
        onPress={onPress}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: ITEM_WIDTH,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  },
  firstChild: {
    marginLeft: 60
  },
  lastChild: {
    marginRight: 60
  }
})

export default AnimatedItem
