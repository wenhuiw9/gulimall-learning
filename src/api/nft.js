import request from '@/utils/request'

export function fetchNFTList(query) {
  return request({
    url: '/nft/nft/list',
    method: 'get',
    params: query
  })
}

export function searchNFTList(query) {
  return request({
    url: '/nft/nft/search',
    method: 'get',
    params: query
  })
}

export function fetchNFT(id) {
  return request({
    url: '/nft/nft/',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createNFT(data) {
  return request({
    url: '/nft/nft/create',
    method: 'post',
    data
  })
}

export function updateNFT(data, status) {
  return request({
    url: '/nft/nft/update',
    method: 'put',
    params: { status },
    data
  })
}

export function updateNFTStatus(id, status) {
  return request({
    url: '/nft/nft/examine',
    method: 'put',
    params: { id, status }
  })
}
