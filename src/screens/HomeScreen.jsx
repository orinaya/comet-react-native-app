import { Text, View } from 'react-native'
import Meteors from '../components/meteor/Meteors'

function HomeScreen () {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', position: 'relative' }}>
      <Meteors number={10} />
      <Text style={{ color: '#fff', textAlign: 'center', marginTop: 100 }}>
        Bienvenue
      </Text>
    </View>
  )
}

export default HomeScreen
