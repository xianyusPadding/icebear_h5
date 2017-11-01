import axios from 'axios'

export function getbbsData() {
  const url = './api/bbsData'
  return axios.get(url).then((res) => {
    return res.data
  })
}
