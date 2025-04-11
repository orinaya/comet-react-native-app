import { StyleSheet, View } from 'react-native'
import FlatListAnimated from '../components/FlatListAnimated'

function PlanetsScreen () {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#0D0D0D'
  }
})

export default PlanetsScreen
