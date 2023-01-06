import Axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `JWT ${token}`
    }
      return config
    },
    (error) => Promise.reject(error)
)

export default Client