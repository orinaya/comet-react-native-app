import { StyleSheet, View } from 'react-native'
import FlatListAnimated from '../components/FlatListAnimated'
import Meteors from '../components/meteor/Meteors'

function PlanetsScreen () {
  return (
    <View style={styles.container}>
      <Meteors number={10} />
      <FlatListAnimated />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#0D0D0D',
    position: 'relative'
  }
})

export default PlanetsScreen
