import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PlanetsScreen from '../screens/PlanetsScreen'

const Stack = createNativeStackNavigator()

function PlanetsNavigator () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Planets' component={PlanetsScreen} />
    </Stack.Navigator>
  )
}

export default PlanetsNavigator
