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
    const response = await api.get('/records')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllPlanets
}
