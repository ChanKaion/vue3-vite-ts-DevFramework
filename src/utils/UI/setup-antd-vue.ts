// 全局引入样式
// import 'ant-design-vue/dist/antd.css';

// 引入所需组件的样式
import 'ant-design-vue/es/message/style/css'; // vite只能用 ant-design-vue/es 而非 ant-design-vue/lib

// 手动按需引入 unplugin-vue-components 插件无法引入的模块
import { message } from 'ant-design-vue';

const plugins = [message];

const setupAntdVue = (app: any) => {
  plugins.forEach((plugin: any) => {
    app.use(plugin);
  });
};

export default setupAntdVue;
