import { StyleSheet, View } from 'react-native'
import { useLinkBuilder } from '@react-navigation/native'
import { PlatformPressable } from '@react-navigation/elements'
import Icon from '@react-native-vector-icons/ionicons'

const icon = {
  HomeTabs: 'home',
  PlanetsTabs: 'planet',
  TravelsTabs: 'rocket',
  ProfileTabs: 'person-circle'
}

function BottomTabs ({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder()

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.button, isFocused ? styles.buttonFillBackground : styles.iconOutline]}
          >
            <Icon
              name={`${isFocused ? icon[route.name] : icon[route.name] + '-outline' || 'help-outline'}`}
              size={24}
              style={[styles.icon, isFocused ? styles.iconFill : styles.iconOutline]}
            />
          </PlatformPressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#141414',
    borderRadius: 40,
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 10,
    borderColor: '#212121',
    borderWidth: 1
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 40
  },
  iconOutline: {
    color: '#fff'
  },
  buttonFillBackground: {
    backgroundColor: '#F3FFBD'
  },
  iconFill: {
    color: '#536600'
  }
})

export default BottomTabs
