import { View, StyleSheet, Dimensions } from 'react-native'
import Meteor from './Meteor'

const { width, height } = Dimensions.get('window')

function Meteors ({ number = 20 }) {
  const meteors = new Array(number).fill(true)
  return (
    <View style={styles.container}>
      {meteors.map((_, idx) => {
        const position = idx * (width / number)
        const delay = Math.random() * 5000
        const duration = Math.floor(Math.random() * (3000 - 1000) + 1000)
        const spacing = height / number
        const baseTop = spacing * idx
        const top = baseTop + Math.random() * (spacing / 2)

        return (
          <Meteor
            key={'meteor' + idx}
            delay={delay}
            duration={duration}
            left={position}
            top={top}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
    overflow: 'hidden',
    pointerEvents: 'none'
  }
})

export default Meteors
