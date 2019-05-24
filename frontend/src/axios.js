import axios from 'axios';

export const API_JOKES = axios.create({
    baseURL: `http://api.icndb.com/jokes/random/10`
})

export const API = axios.create({
    baseURL: `http://localhost:8081/`
})