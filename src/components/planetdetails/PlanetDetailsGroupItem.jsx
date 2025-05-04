import { StyleSheet, View } from 'react-native'
import TextGroupComponent from '../TextGroupComponent'

function PlanetDetailsGroupItem ({ icon, title, text, chemical }) {
  return (
    <View style={styles.container}>
      <TextGroupComponent
        icon={icon}
        title={title}
        text={text}
        chemical={chemical}
        flexDirection='column'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
export default PlanetDetailsGroupItem
