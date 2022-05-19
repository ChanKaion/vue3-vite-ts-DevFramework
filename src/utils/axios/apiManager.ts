import httpMethods from './httpMethods';

// 用户类相关API
const userAPI = {
  // post请求示例，提交用户注册信息
  register: (userInfo: any) =>
    httpMethods.post('user/register', {
      name: userInfo.name,
      telephone: userInfo.telephone,
    }),
};

// 图谱类相关API
const graphAPI = {
  // get请求示例，获取图谱数据
  getGraph: (dataset: string) =>
    httpMethods.get('graph/getGraph', {
      dataset,
    }),
};

export { userAPI, graphAPI };
