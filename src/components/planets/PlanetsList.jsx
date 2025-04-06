import { useCallback, useState } from 'react'
import { FlatList, RefreshControl, Text } from 'react-native'
import PlanetsListItem from './PlanetsListItem'
import { PlanetsListStyle as styles } from './PlanetsStyle'

function PlanetsList ({ planets, onRefresh, onPress }) {
  const [refreshing, setRefreshing] = useState(false)

  const onRefreshList = useCallback(async () => {
    setRefreshing(true)
    await onRefresh()
    setRefreshing(false)
  }, [])

  if (!planets || planets.length < 1) return <Text>No data</Text>

  return (
    <FlatList
      style={styles.container}
      initialNumToRender={30}
      keyExtractor={(item) => item.ordre_order?.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshList} />
      }
      data={planets}
      renderItem={
        ({ item }) => (
          <PlanetsListItem
            planet={item}
            onPress={onPress}
          />
        )
      }
    />
  )
}

export default PlanetsList
