import { useEffect, useState } from 'react'
import { getAllPlanets } from '../services/api'

function usePlanets () {
  const [planets, setPlanets] = useState([])

  const getData = async () => {
    const data = await getAllPlanets()
    if (data) {
      setPlanets(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    planets
  }
}

export default usePlanets
