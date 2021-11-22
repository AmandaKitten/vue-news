import axios from 'axios'

const request = axios.create({
    baseURL: "http://ttapi.research.itecast.cn"
})

export default request