/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-reanimated'
import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigation/MainNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import LoadingScreen from './screens/LoadingScreen'
import BootSplash from 'react-native-bootsplash'
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0D0D0D',
    text: '#fff'
  }
}

function App () {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        // fallback={<LoadingScreen />}
        theme={Theme}
        onReady={() => {
          BootSplash.hide({ fade: true })
        }}
      >
        <MainNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
