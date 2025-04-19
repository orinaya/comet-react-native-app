import Icon from '@react-native-vector-icons/ionicons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function PlanetDetailsHeader ({ title, type, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon name='chevron-back' size={24} color='#fff' />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon name='heart-outline' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 40
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: '#B2DBBF',
    fontFamily: 'neue-kaine',
    fontSize: 24
  },
  type: {
    color: 'white',
    fontSize: 16
  }
})
export default PlanetDetailsHeader
