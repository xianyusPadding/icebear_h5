import axios from 'axios'

export function getData() {
  const url = './api/perCenter'
  return axios.get(url).then((res) => {
    return res.data
  })
}
