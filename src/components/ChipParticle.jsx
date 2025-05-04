import { StyleSheet, Text, View } from 'react-native'

function ChipParticle ({ text, chipBackgroundColor, chipTextColor }) {
  return (
    <View style={[styles.container, chipBackgroundColor]}>
      <Text style={[styles.text, chipTextColor]}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 14,
    fontWeight: '400'
  }

})

export default ChipParticle
