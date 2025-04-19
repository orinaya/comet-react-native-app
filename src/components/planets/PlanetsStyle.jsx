import { StyleSheet } from 'react-native'

export const planetListItemStyle = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'neue-kaine',
    color: '#fff'
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
    marginVertical: 6,
    alignItems: 'center',
    minHeight: 515
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textTitleContainer: {
    color: 'white',
    fontSize: 16
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    shadowColor: 'rgba(179,179,179,0.25)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 27,
    elevation: 10
  },
  textGroupContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: '8',
    backgroundColor: '#1C1C1C',
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 18
  },
  gas: {
    backgroundColor: '#B8E0D9'
  },
  terrestrial: {
    backgroundColor: '#E0D3B8'
  },
  star: {
    backgroundColor: '#EE834A'
  },

  gasText: {
    color: '#1F4740'
  },
  terrestrialText: {
    color: '#6B572F'
  },
  starText: {
    color: '#5D2609'

  }

})

export const PlanetsListStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    flex: 1
  }
})
