import { StyleSheet, Text, View } from 'react-native'
import PlanetDetailsGroupItem from './PlanetDetailsGroupItem'

function PlanetDetailsGroup ({ groupTitle, formattedTravelTime, distance, speed }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{groupTitle}</Text>
      <PlanetDetailsGroupItem
        formattedTravelTime={formattedTravelTime}
        distance={distance}
        speed={speed}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    flexDirection: 'column',
    color: '#fff',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 12,
    borderRadius: 18,
    marginVertical: 6,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontFamily: 'neue-kaine-semiBold',
    fontSize: 18,
    textAlign: 'left',
    width: '100%'
  }

})
export default PlanetDetailsGroup
