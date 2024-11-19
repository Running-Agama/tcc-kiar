import axios from 'axios'

const apiURL = axios.create({
    baseURL: "https://kiarnet-api.onrender.com"
})

export default apiURL