import axios from "axios";

export const key = "23e6d378ea0e8d7595902d7b7f979420fb30d2ff"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers : {
        'Authorization' : `Bearer ${key}`
    }
})

export default api;

