import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  // baseURL: 'http://express.agence-web-rovere.fr/api/',
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
