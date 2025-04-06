import { StyleSheet } from 'react-native'
import usePlanets from '../hooks/usePlanets'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import PlanetsList from '../components/planets/PlanetsList'
import LinearGradient from 'react-native-linear-gradient'

function PlanetsScreen ({ navigation }) {
  const { planets, refresh } = usePlanets()
  const isFocused = useIsFocused()

  const planetsResults = planets.results || []

  useEffect(() => {
    refresh()
  }, [isFocused])

  const handlePress = (planet) => {
    navigation.navigate('PlanetDetails', { planet })
  }
  return (
    <LinearGradient
      colors={['#0D0D0D', '#1F1F1F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.linearGradient}
    >
      <PlanetsList
        planets={planetsResults}
        onRefresh={refresh}
        onPress={handlePress}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
})

export default PlanetsScreen
