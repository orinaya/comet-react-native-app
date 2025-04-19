import { Text, View } from 'react-native'
import Meteors from '../components/animations/meteor/Meteors'

function ProfileScreen () {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Meteors number={10} />
    </View>
  )
}

export default ProfileScreen
