/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigation/MainNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import LoadingScreen from './screens/LoadingScreen'
import { Colors } from './styles/Colors'
import { Text } from 'react-native'

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...Colors
  }
}

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        fallback={<LoadingScreen />}
        theme={myTheme}
        onReady={() => {
          BootSplash.hide({ fade: true })
        }}
      >
        <Text>Hey</Text>
        {/* <MainNavigator /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App