import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  server: { //服务端配置
    open: true, //是否自动打开浏览器
    port: 8088, //端口号
  },
  resolve: { //路径别名
    alias: { //别名
      '@': path.resolve(__dirname, './src')
    }
  },

  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
      }),
    ],
})
