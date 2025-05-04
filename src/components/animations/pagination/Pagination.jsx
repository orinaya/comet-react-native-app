import { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import PaginationDot from './PaginationDot'

function Pagination ({ items, paginationIndex, scrollX }) {
  return (
    <View style={styles.container}>
      {items.map((_, index) => (
        <PaginationDot
          key={index}
          index={index}
          scrollX={scrollX}
          isActive={paginationIndex === index}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default memo(Pagination)
