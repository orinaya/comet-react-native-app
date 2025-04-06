import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()

function ProfileNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
