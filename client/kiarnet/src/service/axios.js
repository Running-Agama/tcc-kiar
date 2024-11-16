import axios from 'axios'

const apiURL = axios.create({
    baseURL: "http://4.172.207.208:5003"
})

export default apiURL