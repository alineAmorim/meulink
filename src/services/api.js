import axios from "axios";

export const key = "e98a1982c817a90a3dc936efb54c82dcd819d9ad"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers : {
        'Authorization' : `Bearer ${key}`
    }
})

export default api;

