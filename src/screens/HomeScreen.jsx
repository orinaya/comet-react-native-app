import { ScrollView, StyleSheet, Text } from 'react-native'
import Meteors from '../components/animations/meteor/Meteors'
import useHubble from '../hooks/useHubble'
import Slider from '../components/animations/carousel/Slider'

function HomeScreen () {
  const { hubblePictures } = useHubble()
  const hubbleResults = hubblePictures.results || []

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Welcome voyager
      </Text>
      <Slider itemList={hubbleResults} />
      <Meteors number={10} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
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
