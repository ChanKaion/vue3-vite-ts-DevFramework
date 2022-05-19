import axiosService from './axiosService';

// http请求方法封装
const httpMethods = {
  get(url: string, params: any) {
    const config = {
      method: 'get',
      url,
      params: undefined,
    };
    if (params) config.params = params;
    return axiosService(config);
  },

  post(url: string, params: any) {
    const config = {
      method: 'post',
      url,
      data: undefined,
    };
    if (params) config.data = params;
    return axiosService(config);
  },

  put(url: string, params: any) {
    const config = {
      method: 'put',
      url,
      params: undefined,
    };
    if (params) config.params = params;
    return axiosService(config);
  },

  delete(url: string, params: any) {
    const config = {
      method: 'delete',
      url,
      params: undefined,
    };
    if (params) config.params = params;
    return axiosService(config);
  },
};

export default httpMethods;
