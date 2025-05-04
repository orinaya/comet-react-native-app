import { ScrollView, StyleSheet } from 'react-native'
import Meteors from '../components/animations/meteor/Meteors'
import useHubble from '../hooks/useHubble'
import Slider from '../components/animations/carousel/Slider'
import HomeHero from '../components/home/HomeHero'
import { useNavigation } from '@react-navigation/native'
function HomeScreen () {
  const { hubblePictures } = useHubble()
  const hubbleResults = hubblePictures.results || []

  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('PlanetsTabs', {
      screen: 'Planets'
    })
  }

  return (
    <ScrollView style={styles.container}>
      <HomeHero onPress={handlePress} />
      <Slider itemList={hubbleResults} />
      <Meteors number={10} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    marginBottom: 100
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'neue-kaine'
  }
})
export default HomeScreen
