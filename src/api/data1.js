import request from '@/utils/request'

export function getData(params) {
  return request({
    url: '/oneSceneData',
    method: 'get',
    params
  })
}
