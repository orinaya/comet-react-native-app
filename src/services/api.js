import axios from 'axios'
import Config from 'react-native-config'

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getAllPlanets = async () => {
  try {
    const response = await api.get('/donnees-systeme-solaire-solar-system-data/records')
    return response.data
  } catch (error) {
    console.error('Erreur fetch planets:', error)
  }
}

const getAllHubblePictures = async () => {
  try {
    const response = await api.get('/nasahubble/records')
    return response.data
  } catch (error) {
    console.error('Erreur fetch hubble:', error)
  }
}

export {
  getAllPlanets,
  getAllHubblePictures
}
