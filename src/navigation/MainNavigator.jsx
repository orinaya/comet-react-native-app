import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator'
import ProfileNavigator from './ProfileNavigator'
import PlanetsNavigator from './PlanetsNavigator'
import TravelsNavigator from './TravelsNavigator'
import BottomTabs from './BottomTabs'

const Tabs = createBottomTabNavigator()

function MainNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <Tabs.Screen name='Home' component={HomeNavigator} />
      <Tabs.Screen name='Planets' component={PlanetsNavigator} />
      <Tabs.Screen name='Travels' component={TravelsNavigator} />
      <Tabs.Screen name='Profile' component={ProfileNavigator} />
    </Tabs.Navigator>
  )
}

export default MainNavigator
