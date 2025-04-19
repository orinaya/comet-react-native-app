import { StyleSheet, Text, View } from 'react-native'

function PlanetDetailsGroup ({ groupTitle, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{groupTitle}</Text>
      <View style={[styles.childrenContainer, { flexDirection: 'column' }]}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    flexDirection: 'column',
    color: '#fff',
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
    width: '100%',
    marginBottom: 8
  },
  childrenContainer: {
    justifyContent: 'center',
    width: '100%',
    gap: 8
  }

})
export default PlanetDetailsGroup
