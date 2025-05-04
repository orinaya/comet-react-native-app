import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../assets/images/comet-logo.png'

function HeaderComponent () {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode='contain'
      />

      <View style={styles.userCircle}>
        <Text style={styles.initials}>JB</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  logo: {
    width: 70,
    height: 70
  },
  userCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B2DBBF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  initials: {
    color: '#418B58',
    fontWeight: 'bold'
  }
})

export default HeaderComponent
