import axios from "axios";
import router from "../router"

axios.defaults.baseURL = "http://localhost:3000";

// 请求拦截
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    if (token) {
      // 将token携带在请求头中
      config.headers.Authorization = token 
    }
    return config
  })
  
  // 响应拦截
  axios.interceptors.response.use(res => {
    // 拦截报错的情况
    if (res.data.code && res.data.code !== 0) {
      return Promise.reject(res.data.error)
    }
    // status在400~500之间的我们认定为是登录过期
    if (res.data.status >= 400 && res.data.status < 500) {
      router.push('/login')
      return Promise.reject(res.data)
    }
    return res // 响应内容没有问题
  }
)
  
  export function post(url, body) { 
    return axios.post(url, body)
  }
