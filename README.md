如何使文件自动打开浏览器
在vite.config.js中添加: export default defineConfig({ server:{ open: true, //是否自动打开浏览器 port: 8088, //端口号 }, })
如何配置路径中的@
在vite.config.js中添加: import path from 'path'
export default defineConfig({ resolve:{ alias:{ '@': path.resolve(__dirname, './src') } }, })

router-link to 的使用
router-link :to="/XXX" 可以动态绑定路径实现跳转

linkActiveClass 的使用
linkActiveClass 是 vue-router 路由中的一个选项，用于设置活动链接的 CSS 类。当链接处于活动状态时， 指定的 CSS 类将被添加到该链接的元素上，从而可以应用样式以突显当前活动的导航链接。

父元素设置横向滚动区域
overflow-x: auto;

父元素中设置不允许子换行
wwhite-space: nowrap;

子元素设置为行内块元素
display: inline-block;

设置滚动条隐藏
::-webkit-scrollbar { display: none; }

使用scss/less/css修改vant UI样式的方法
:deep(组件名){ 样式 }

添加计数器
::before{ counter-increment: count; // 给元素添加计数器 content: counter(count); // 给元素添加计数器内容 }
