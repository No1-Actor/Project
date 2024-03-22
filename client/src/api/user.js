import { post } from './index.js'

export function login(body) {
    return post('/login', body).then(res => res.data)
}

export function index(body) {
    return post('/index', body).then(res => res.data)
}