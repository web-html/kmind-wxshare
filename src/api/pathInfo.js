import request from '@/utils/request'
export function addInfo(info) {
    return request.post('/api/pathVersion/', info)
}
export function getList() {
    return request.get( '/api/pathVersion/list')
}
export function deleteInfo(id) {
    return request.delete('/api/pathVersion/' + id)
}