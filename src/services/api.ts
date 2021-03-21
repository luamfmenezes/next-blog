import axios from 'axios'

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything',
})

axios.defaults.params = {
    q: 'bitcoin',
    apiKey: '36d0e2c067b647c09af0a0c459da42ad',
}

export default api
