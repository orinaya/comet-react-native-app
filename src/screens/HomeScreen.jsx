import { Text, View } from 'react-native'
import Meteors from '../components/animations/meteor/Meteors'

function HomeScreen () {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Text style={{ color: '#fff', textAlign: 'center', marginTop: 100 }}>
        Bienvenue
      </Text>
      <Meteors number={10} />
    </View>
  )
}

export default HomeScreen
