import request from '@/utils/request'
export function addInfo(info) {
    return request.post('/api/app/system/info', info)
}
export function getList() {
    return request.get( '/api/app/system/info/list')
}
export function deleteInfo(id) {
    
    return request.delete('/api/app/system/info/' + id)
}