import axios from 'axios'

export function getData () {
  const url = './data/data.json'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
