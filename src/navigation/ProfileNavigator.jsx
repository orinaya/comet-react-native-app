import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import HeaderComponent from '../components/HeaderComponent'

const Stack = createNativeStackNavigator()

function ProfileNavigator () {
  return (
    <Stack.Navigator screenOptions={{ header: () => <HeaderComponent /> }}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
