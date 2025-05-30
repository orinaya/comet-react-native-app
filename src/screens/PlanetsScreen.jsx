import { StyleSheet, Text, View } from 'react-native'
import FlatListAnimated from '../components/animations/flatList/FlatListAnimated'
import usePlanets from '../hooks/usePlanets'
import Meteors from '../components/animations/meteor/Meteors'

function PlanetsScreen () {
  const { planets } = usePlanets()
  const planetsResults = planets.results || []
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your destination</Text>
      <View style={styles.resultsContainer}>
        <Text style={styles.results}>{planetsResults.length} results</Text>
      </View>
      <FlatListAnimated />
      <Meteors number={10} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    color: '#fff',
    fontFamily: 'neue-kaine',
    fontSize: 20,
    marginTop: 60
  },
  resultsContainer: {
    backgroundColor: '#242424',
    borderColor: '#292929',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 12
  },
  results: {
    color: '#fff'
  }
})

export default PlanetsScreen
