import request from '@/utils/request';

export function exampleApi(query: any) {
  return request({
    url: '/elementPlus-vite-starter/exampleApi',
    method: 'get',
    params: query,
  });
}

// Add more api request here
