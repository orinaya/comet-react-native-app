import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigator from './HomeNavigator'
import ProfileNavigator from './ProfileNavigator'
import PlanetsNavigator from './PlanetsNavigator'
import TravelsNavigator from './TravelsNavigator'
import BottomTabs from './BottomTabs'

const Tabs = createBottomTabNavigator()

function MainNavigator () {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <Tabs.Screen name='HomeTabs' component={HomeNavigator} />
      <Tabs.Screen name='PlanetsTabs' component={PlanetsNavigator} />
      <Tabs.Screen name='TravelsTabs' component={TravelsNavigator} />
      <Tabs.Screen name='ProfileTabs' component={ProfileNavigator} />
    </Tabs.Navigator>
  )
}

export default MainNavigator
