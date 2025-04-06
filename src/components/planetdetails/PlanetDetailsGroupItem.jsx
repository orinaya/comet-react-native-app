import { StyleSheet, View } from 'react-native'
import TextGroup from '../TextGroup'

function PlanetDetailsGroupItem({ formattedTravelTime, distance, speed }) {
  return (
    <View style={styles.container}>
      <TextGroup
        icon='earth'
        title='Distance'
        text={`${distance} kms`}
        flexDirection='column'
      />
      <TextGroup
        icon='stopwatch'
        title='Duration'
        text={`${formattedTravelTime} days`}
        flexDirection='column'
      />
      <TextGroup
        icon='timer'
        title='Speed'
        text='58k km/h'
        flexDirection='column'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }

})
export default PlanetDetailsGroupItem
