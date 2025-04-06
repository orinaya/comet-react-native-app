import { Image, Text, View } from 'react-native'
import usePlanets from '../hooks/usePlanets'

function PlanetsScreen () {
  const { planets } = usePlanets()

  const data = planets.results || []

  return (
    <View>
      <Text>Planets Screen</Text>
      {data.map((item) =>
        <View key={item.ordre_order}>
          <Text>{item.type_d_astre_type_of_planet}</Text>
          <Text>{item.planete_planet}</Text>
          <Text>{item.distance_moyenne_average_distance_x10_6_km}</Text>
          <Text>{item.periode_de_revolution_jours_orbital_period_days}</Text>
          <Text>{item.gravite_gravity_m_s2}</Text>
          <Text>{item.temperature_moyenne_mean_temperature_degc}</Text>
          <Text>{item.nombre_de_satellites_number_of_satellites}</Text>
          <Text>{item.atmospheric_composition?.join(', ')}</Text>
          {item.image?.url && (
            <Image
              source={{ uri: item.image.url }}
              style={{ width: 100, height: 100 }}
            />
          )}
        </View>
      )}
    </View>
  )
}

export default PlanetsScreen
