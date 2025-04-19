import { Image, Text, TouchableOpacity, View } from 'react-native'
import { planetListItemStyle as styles } from './PlanetsStyle'
import TextGroup from '../TextGroup'
import ChipParticle from '../ChipParticle'
import Button from '../ButtonParticle'

function PlanetsListItem ({ planet, onPress }) {
  const getTravelDuration = () => {
    const distance = planet.distance_moyenne_average_distance_x10_6_km * 1e6
    const speed = 58000
    const durationInHours = distance / speed
    const durationInDays = durationInHours / 24
    return durationInDays
  }

  const travelTimeInDays = getTravelDuration()
  const formattedTravelTime = travelTimeInDays.toFixed(0) || 0

  const planetName = planet.planete_planet.split('/')[0].trim()
  const planetType = planet.type_d_astre_type_of_planet.split(' /')[0].split(' ')[0]

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(planet)}>
      <Text style={styles.title}>{planetName}</Text>
      {planet.image?.url && (
        <Image
          key={planet.image.url}
          source={{ uri: planet.image.url }}
          style={styles.image}
        />
      )}
      <View key={planet.ordre_order} style={styles.textGroupContainer}>
        <TextGroup
          icon='earth'
          title='Type'
          text={
            <>
              <ChipParticle
                planetType={planetType}
                chipBackgroundColor={
                  planetType === 'Gas'
                    ? styles.gas
                    : planetType === 'Terrestrial'
                      ? styles.terrestrial
                      : styles.star
                }
                chipTextColor={
                  planetType === 'Gas'
                    ? styles.gasText
                    : planetType === 'Terrestrial'
                      ? styles.terrestrialText
                      : styles.starText
                }
              />
            </>
          }
        />
        <TextGroup
          icon='earth'
          title='Distance'
          text={planet.distance_moyenne_average_distance_x10_6_km
            ? `${planet.distance_moyenne_average_distance_x10_6_km} kms`
            : 'Inconnu'}
        />
        <TextGroup
          icon='stopwatch'
          title='Duration'
          text={`${formattedTravelTime} days`}
          flexDirection='row'
        />
        <Button variant='accent' icon='eye' onPress={() => onPress(planet)}>
          See more
        </Button>
      </View>
    </TouchableOpacity>
  )
}

export default PlanetsListItem
