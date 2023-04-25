import axios from './interceptors'

export function getUserData(data) {
    return axios.get('/user/all')
}