import axios from 'axios'
import router from '../router'

const fetch = axios.create({
  baseURL: '/'
})
fetch.interceptors.request.use((config) => {
  let token = localStorage.getItem('token')
  if(token){
      config.headers.token = token
  }
  return config
}, err => Promise.reject(err))

fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.code == 401){
    Toast({
      message: '登录状态已过期，请重新登录',
      duration: 1000
    })
    router.push({
      name: 'login'
    })
  }
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const str = '字符串'
export {fetch, str}
