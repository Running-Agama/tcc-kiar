import axios from 'axios'

const apiURL = axios.create({
    baseURL: "http://localhost:3053"
})

export default apiURL