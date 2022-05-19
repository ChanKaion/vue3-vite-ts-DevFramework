import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// 自动化按需引入 antd 组件
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 自动化按需引入antd-vue
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名
  },
  base: './', // 根目录
  server: {
    https: false, // 是否开启 https
    host: 'localhost', // 域名
    port: 40512, // 端口号
    // 配置接口代理
    proxy: {
      // 接口代理ip1
      '/graph': {
        target: 'http://127.0.0.1:8931',
        changeOrigin: true,
        ws: true,
        secure: false,
        rewrite: (urlPath: string) => urlPath.replace(/^\/graph/, ''),
      },
      // 接口代理ip2
      '/user': {
        target: 'http://127.0.0.1:40192',
        changeOrigin: true,
        ws: true,
        secure: false,
        rewrite: (urlPath: string) => urlPath.replace(/^\/user/, ''),
      },
    },
  },
});
