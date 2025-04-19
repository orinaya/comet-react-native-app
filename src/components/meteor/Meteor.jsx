import React, { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'

function Meteor ({ duration, left, top }) {
  const translateX = useRef(new Animated.Value(0)).current
  const opacity = useRef(new Animated.Value(0.3)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        // Animated.delay(delay),
        Animated.parallel([
          Animated.timing(translateX, {
            toValue: -600,
            duration,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
            isInteraction: false
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration,
            useNativeDriver: true
          })
        ]),
        Animated.timing(translateX, {
          toValue: -600,
          duration: 0,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
          isInteraction: false
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 0,
          useNativeDriver: true
        })
      ])
    )

    animation.start()
    return () => animation.stop()
  }, [])

  return (
    <Animated.View
      style={[
        styles.meteor,
        {
          top,
          left,
          transform: [{ rotate: '225deg' }, { translateX }],
          opacity
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  meteor: {
    position: 'absolute',
    // top: -80,
    height: 1,
    width: 60,
    backgroundColor: '#94a3b8',
    borderRadius: 9999,
    shadowColor: '#ffffff10',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
    opacity: 0.3
  }
})

export default Meteor
