import Icon from '@react-native-vector-icons/ionicons'
import { StyleSheet, Text, View } from 'react-native'
import ChemicalSquare from './ChemicalSquare'

function TextGroup ({ title, text, icon, chemical }) {
  const isLogoIcon = icon.startsWith('logo-')
  const iconName = isLogoIcon ? icon : `${icon}-outline`

  const flexDirection = Array.isArray(chemical) && chemical.length > 0 ? 'column' : 'row'
  return (
    <View style={[styles.container, { flexDirection, width: '100%' }]}>
      <View style={styles.titleRow}>
        <Icon name={iconName} size={16} color='#fff' />
        <Text style={styles.title}>{title}</Text>
      </View>

      {Array.isArray(chemical) && chemical.length > 0
        ? (
          <View style={styles.chemicalContainer}>
            {chemical.map((element, index) => (
              <ChemicalSquare
                key={index}
                text={element}
              />
            ))}
          </View>
          )
        : (
          <Text style={styles.text}>{text}</Text>
          )}

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#242424',
    borderColor: '#292929',
    borderRadius: 8,
    borderWidth: 1
  },
  chemicalContainer: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 8
  },
  titleRow: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 14
  },
  text: {
    fontWeight: 'bold',
    color: 'hsla(71, 100%, 80%, 1)'
  }
})

export default TextGroup
