import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ChipParticle from '../../ChipParticle'
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated'

function SliderItem ({ item, index, scrollX }) {
  const { width } = Dimensions.get('screen')
  const cardWidth = Dimensions.get('window').width

  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          )
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          )
        }
      ]
    }
  })
  function formatDate (date) {
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  }

  const photoDate = formatDate(item.photo_date_taken)
  return (
    <Animated.View
      style={[styles.card, { width: cardWidth }, rnAnimatedStyle]}
    >
      <View style={[styles.innerContainer, { width: cardWidth - 40 }]}>
        <Image
          source={{ uri: item.photo_url_m?.url }}
          style={styles.image}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
          style={[styles.gradientOverlay]}
        />
        <View style={styles.description}>
          <Text numberOfLines={2} style={styles.title}>
            {item.photo_title}
          </Text>
          <ChipParticle
            style={styles.chipParticle}
            text={photoDate}
            chipBackgroundColor={styles.chipBackgroundColor}
            chipTextColor={styles.chipTextColor}
          />

        </View>
      </View>

    </Animated.View>

  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    position: 'relative',
    overflow: 'hidden'
  },
  innerContainer: {
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#000'
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover'
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    width: '100%'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: 'column',
    gap: 8,
    overflow: 'visible'
  },
  chipBackgroundColor: {
    backgroundColor: '#B8E0D9'
  },
  chipTextColor: {
    color: '#1F4740'
  }
})

export default SliderItem
