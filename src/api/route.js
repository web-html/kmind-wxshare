import api from '@/utils/request'

//poi
export function getPoiDetail (params) {
  return api.post('/api/app/poi/detail', params)
}
export function getTempDetail (params) {
  return api.post('/api/app/wild/detail', params)
}
//足迹
export function getTrack (params) {
  return api.post('/api/app/track/simple', params)
}
//路线
export function getTravelDetail (params) {
  return api.post('/api/app/travel/detail', params)
}
// 公告
export function getNotice (params) {
  return api.post('/api/app/club/look/notice', params)
}
