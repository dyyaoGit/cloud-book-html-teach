import axios from 'axios'

const fetch = axios.create({
  baseURL: 'https://m.yaojunrong.com/'
})

fetch.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const str = '字符串'
export {fetch, str}
