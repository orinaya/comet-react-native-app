import { Text, View } from 'react-native'
import { elementStyles } from '../../utils/chemicalColors'

function ChemicalSquareParticle ({ text }) {
  const element = elementStyles[text] || {
    backgroundColor: '#fff',
    textColor: '#000'
  }

  return (
    <View style={[
      styles.container,
      { backgroundColor: element.backgroundColor }
    ]}
    >
      <Text style={[
        styles.text,
        { color: element.textColor }
      ]}
      >
        {text}
      </Text>
    </View>
  )
}

const styles = {
  container: {
    height: 40,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
}
export default ChemicalSquareParticle
