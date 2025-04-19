import { Text, View } from 'react-native'
import Meteors from '../components/animations/meteor/Meteors'

function TravelsScreen () {
  return (
    <View style={{ flex: 1 }}>
      <Text>Travels Screen</Text>
      <Meteors number={10} />
    </View>
  )
}

export default TravelsScreen
