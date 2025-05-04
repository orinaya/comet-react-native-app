import { useEffect, useState } from 'react'
import { getAllHubblePictures } from '../services/api'

function useHubble () {
  const [hubblePictures, sethubblePictures] = useState([])

  const getData = async () => {
    const data = await getAllHubblePictures()
    if (data) {
      sethubblePictures(data)
    }
  }
  const refresh = async () => {
    const data = await getAllHubblePictures()
    if (data) {
      sethubblePictures(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    hubblePictures,
    refresh
  }
}

export default useHubble
