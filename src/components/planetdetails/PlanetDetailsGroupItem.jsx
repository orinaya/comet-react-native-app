import { StyleSheet, View } from 'react-native'
import TextGroup from '../TextGroup'

function PlanetDetailsGroupItem ({ icon, title, text, chemical }) {
  return (
    <View style={styles.container}>
      <TextGroup
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
