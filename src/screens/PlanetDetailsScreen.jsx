import { Image, StyleSheet, Text, View } from 'react-native'
import PlanetDetailsHeader from '../components/planetdetails/PlanetDetailsHeader'
import PlanetDetailsGroup from '../components/planetdetails/PlanetDetailsGroup'
import Meteors from '../components/animations/meteor/Meteors'

function PlanetDetailScreen ({ navigation, route }) {
  const { planet } = route.params || {}

  if (!planet) {
    return (
      <View>
        <Text>Oups,no data for this planet</Text>
      </View>
    )
  }
  const planetName = planet.planete_planet.split('/')[0].trim()
  const planetType = planet.type_d_astre_type_of_planet.split(' /')[0].trim()

  const getTravelDuration = () => {
    const distance = planet.distance_moyenne_average_distance_x10_6_km * 1e6
    const speed = 58000
    const durationInHours = distance / speed
    const durationInDays = durationInHours / 24
    return durationInDays
  }

  const travelTimeInDays = getTravelDuration()
  const formattedTravelTime = travelTimeInDays.toFixed(0) || 0

  const distance = planet.distance_moyenne_average_distance_x10_6_km
  console.log(distance)

  return (
    <View style={{ flex: 1, margin: 12 }}>
      <PlanetDetailsHeader
        title={planetName}
        type={planetType}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.imageContainer}>
        {planet.image?.url && (
          <Image
            source={{ uri: planet.image.url }}
            style={styles.image}
          />
        )}
      </View>
      <PlanetDetailsGroup groupTitle='Journey' formattedTravelTime={formattedTravelTime} distance={distance} />
      <PlanetDetailsGroup groupTitle='Journey' formattedTravelTime={formattedTravelTime} distance={distance} />
      <Meteors number={10} />
    </View>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
})

export default PlanetDetailScreen
