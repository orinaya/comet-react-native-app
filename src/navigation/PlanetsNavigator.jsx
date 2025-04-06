import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PlanetsScreen from '../screens/PlanetsScreen'
import PlanetDetailsScreen from '../screens/PlanetDetailsScreen'

const Stack = createNativeStackNavigator()

function PlanetsNavigator () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Planets' component={PlanetsScreen} />
      <Stack.Screen name='PlanetDetails' component={PlanetDetailsScreen} />
    </Stack.Navigator>
  )
}

export default PlanetsNavigator
