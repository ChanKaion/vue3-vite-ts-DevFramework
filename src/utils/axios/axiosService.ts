import axios from 'axios';

// 创建新的axios实例
const axiosService = axios.create({
  // 公共接口地址
  baseURL: '',
  // 超时设置 20s
  timeout: 20 * 1000,
});

// 定义请求拦截器，用于做一些请求前的处理，比如数据转化、配置请求头、设置token、设置loading等
axiosService.interceptors.request.use(
  (config: any) => {
    const resConfig = {
      data: JSON.stringify(config.data),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      ...config,
    };
    return resConfig;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// 定义设置响应拦截器
axiosService.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    let errorMsg = error.message || '';
    // 根据响应码处理异常
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          errorMsg = '错误请求';
          break;
        case 401:
          errorMsg = '未授权，请重新登录';
          break;
        case 403:
          errorMsg = '拒绝访问';
          break;
        case 404:
          errorMsg = '请求错误,未找到该资源';
          window.location.href = '/NotFound';
          break;
        case 405:
          errorMsg = '请求方法未允许';
          break;
        case 408:
          errorMsg = '请求超时';
          break;
        case 500:
          errorMsg = '服务器端出错';
          break;
        case 501:
          errorMsg = '网络未实现';
          break;
        case 502:
          errorMsg = '网络错误';
          break;
        case 503:
          errorMsg = '服务不可用';
          break;
        case 504:
          errorMsg = '网络超时';
          break;
        case 505:
          errorMsg = 'http版本不支持该请求';
          break;
        default:
          errorMsg = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        console.log('服务器响应超时，请刷新当前页');
      }
      errorMsg = '服务器响应超时';
    }

    console.log(errorMsg);
    // 如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
  }
);

export default axiosService;
