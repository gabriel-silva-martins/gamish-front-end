import Axios from 'axios'

export const gamishApi = Axios.create ({
    baseURL: "https://localhost:5001"
}) 