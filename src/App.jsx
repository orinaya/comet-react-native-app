/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigation/MainNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import LoadingScreen from './screens/LoadingScreen'
import { Colors } from './styles/Colors'
import BootSplash from 'react-native-bootsplash'

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...Colors
  }
}

function App() {
  // useEffect(() => {
  //   const init = async () => {
  //     await new Promise(resolve => setTimeout(resolve, 1500));

  //     BootSplash.hide({ fade: true });
  //   };

  //   init();
  // }, []);
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        // fallback={<LoadingScreen />}
        theme={myTheme}
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