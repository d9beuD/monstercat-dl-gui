import axios from 'axios'

const baseURL= 'https://connect.monstercat.com/v2'

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true
})

export default {
  get: {
    releases: (limit = 5) => {
      if (limit > 50) {
        limit = 50
      }
      return instance.get(`/releases?limit=${limit}&type=Single&type=Album&type=EP`)
    },
    release: (releaseId) => {
      return instance.get(`/catalog/release/${releaseId}`)
    }
  },
  baseURL: baseURL
}
