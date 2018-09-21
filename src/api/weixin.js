import api from '@/utils/request'

export function fetchShareInfo (query) {
  return api.get('/api/share/weiXin', {
    'params': query
  })
}
export function security (body) {
  return api.post('/', {
    'body': body
  })
}
