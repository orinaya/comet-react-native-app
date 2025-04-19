// This component is used to create a horizontal animated FlatList
import {
  View,
  StyleSheet
} from 'react-native'

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated'

import AnimatedItem from './flatListAnimated/AnimatedItem'
import { useCallback, useEffect, useRef } from 'react'
import usePlanets from '../hooks/usePlanets'
import { useNavigation } from '@react-navigation/native'

const ITEM_WIDTH = 260
const AnimatedFlatList = Animated.FlatList // Animated Wrapper around Flatlist (provided by Reanimated)

function FlatListAnimated () {
  const { planets } = usePlanets()

  const planetsResults = planets.results || []
  const navigation = useNavigation()
  const handlePress = (planet) => {
    navigation.navigate('PlanetDetails', { planet })
  }
  console.log(planets)
  // Shared value used to stock the horizontal scroll position
  const transX = useSharedValue(0)

  // render items
  const renderItem = useCallback(({ item, index }) => {
    return <AnimatedItem index={index} item={item} transX={transX} onPress={handlePress} />
  }, [])

  // Update transX value on horizontal scroll
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      transX.value = event.contentOffset.x
    }
  })

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index
    }),
    []
  )
  useEffect(() => {
    if (planetsResults.length > 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 0, animated: false })
    }
  }, [planetsResults])

  const flatListRef = useRef(null)

  const keyExtractor = useCallback((item, index) => `${item.id}-${index}`, [])
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <AnimatedFlatList
          ref={flatListRef}
          onScroll={scrollHandler}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={planetsResults}
          decelerationRate='fast'
          scrollEventThrottle={16}
          pagingEnabled
          snapToAlignment='center'
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialScrollIndex={0}
          getItemLayout={getItemLayout}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    flexGrow: 0,
    paddingHorizontal: (index) => (index === 0 ? 80 : ITEM_WIDTH)
  },
  results: {
    color: '#fff'
  },
  box: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
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
  }

})

export default FlatListAnimated
