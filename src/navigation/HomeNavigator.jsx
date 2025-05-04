import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import HeaderComponent from '../components/HeaderComponent'

const Stack = createNativeStackNavigator()

function HomeNavigator () {
  return (
    <Stack.Navigator screenOptions={{ header: () => <HeaderComponent /> }}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
