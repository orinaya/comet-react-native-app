import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import Background from '../../assets/images/home-banner.jpg'
import Button from '../particles/ButtonParticle'
import Logo from '../../assets/images/comet-logo.png'
function HomeHero ({ onPress }) {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={Background} resizeMode='cover' style={styles.background} imageStyle={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Book your next trip as fast as a</Text>
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>
          <Button variant='accent' icon='ticket' style={styles.button} onPress={onPress}>
            Get your ticket
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 580,
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#161616'
  },
  background: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  image: {
    borderRadius: 20
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#F3FFBD',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'neue-kaine-semiBold'
  },
  logo: {
    width: 140,
    height: 70,
    alignSelf: 'center'
  }
})

export default HomeHero
