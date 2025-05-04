// This component is a Carousel of hubble pictures
import { StyleSheet, Text, View } from 'react-native'
import SliderItem from './SliderItem'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Pagination from '../pagination/Pagination'
import { useRef, useState } from 'react'

function Slider ({ itemList }) {
  const scrollX = useSharedValue(0)
  const [paginationIndex, setPaginationIndex] = useState()
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x
    }
  })

  const onViewableItemsChanged = ({ viewableItems }) => {
    if
    (viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index)
    }
  }
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  }

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged }
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our last Hubble Pictures</Text>
      <Animated.FlatList
        data={itemList}
        horizontal
        keyExtractor={(item) => item.photo_id.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
      />
      <Pagination
        items={itemList}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginVertical: 20,
    width: '100%',
    marginLeft: 40,
    fontFamily: 'neue-kaine-semiBold'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})

export default Slider
