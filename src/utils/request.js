import axios from 'axios'
// import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)// for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  })

  const ajaxMethod = ['get', 'post', 'delete', 'put'];
  const api = {};
  ajaxMethod.forEach((method) => {
    api[method] = function fun(uri, data, config) {
      return new Promise((resolve) => {
        service[method](uri, data, config).then((response) => {
          resolve(response);
        });
      });
    };
  });
export default api
