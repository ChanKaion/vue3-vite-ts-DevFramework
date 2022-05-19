import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入 antd-vue 组件
import setupAntdVue from './utils/UI/setup-antd-vue';

// 声明app对象
const app = createApp(App);

// 注册路由
app.use(router);

// 注册 antd-vue 组件
setupAntdVue(app);

// 挂载app
app.mount('#app');
