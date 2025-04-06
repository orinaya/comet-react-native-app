import Icon from '@react-native-vector-icons/ionicons'
import { StyleSheet, Text, View } from 'react-native'

function TextGroup ({ title, text, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Icon name={`${icon}-outline`} size={16} color='#fff' />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#242424',
    borderColor: '#292929',
    borderRadius: 8,
    borderWidth: 1
  },
  titleRow: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white'
  },
  text: {
    fontWeight: 'bold',
    color: 'hsla(71, 100%, 80%, 1)'
  }
})

export default TextGroup
