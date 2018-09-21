import api from '@/utils/request'

export function getCode () {
  return api.get( '/api/app/code')  
}

