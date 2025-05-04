import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TravelsScreen from '../screens/TravelsScreen'
import HeaderComponent from '../components/HeaderComponent'

const Stack = createNativeStackNavigator()

function TravelsNavigator () {
  return (
    <Stack.Navigator screenOptions={{ header: () => <HeaderComponent /> }}>
      <Stack.Screen name='Travels' component={TravelsScreen} />
    </Stack.Navigator>
  )
}

export default TravelsNavigator
