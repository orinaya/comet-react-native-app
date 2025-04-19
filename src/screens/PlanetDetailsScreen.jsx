import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import PlanetDetailsHeader from '../components/planetdetails/PlanetDetailsHeader'
import PlanetDetailsGroup from '../components/planetdetails/PlanetDetailsGroup'
import Meteors from '../components/animations/meteor/Meteors'
import PlanetDetailsGroupItem from '../components/planetdetails/PlanetDetailsGroupItem'
import { getPlanetData } from '../utils/getPlanetData'
import Button from '../components/ButtonParticle'

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

  const planetData = getPlanetData(planet)
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
    >
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

      {planetData.map((section, index) =>
        Object.entries(section).map(([key, value]) => (
          <PlanetDetailsGroup
            key={`${key}-${index}`}
            groupTitle={value.groupTitle}
          >
            {value.data.map((item, index) => (
              <PlanetDetailsGroupItem
                key={`${key}-item-${index}`}
                icon={item.icon}
                title={item.title}
                text={item.text}
                chemical={item.chemical}
              />
            ))}
          </PlanetDetailsGroup>
        ))
      )}
      <View style={styles.buttonContainer}>
        <Button variant='accent' icon='ticket' style={styles.button}>
          Get your ticket
        </Button>
      </View>
      <Meteors number={10} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: 100
  },
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20'
  }
})

export default PlanetDetailScreen
