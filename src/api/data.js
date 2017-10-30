import axios from 'axios'

export function getData() {
  const url = './api/data'
  return axios.get(url).then((res) => {
    return res.data
  })
}
