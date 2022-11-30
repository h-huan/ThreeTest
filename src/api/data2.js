
import request from '@/utils/request'

export function getData(params) {
  return request({
    url: '/twoSceneData',
    method: 'get',
    params
  })
}
