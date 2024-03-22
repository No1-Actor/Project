const koa = require('koa');
const app = new koa()
const bodyParser = require('koa-bodyparser')  // 让koa能解析post请求
// const cors = require('koa2-cors')  // 解决跨域问题
const userRouter = require('./routes/user')

// 处理跨域请求
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*'); // 允许所有源访问
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 允许的 HTTP 请求方法
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // 允许的请求头字段
  
    if (ctx.method === 'OPTIONS') { // 处理预检请求
      ctx.status = 204;
    } else {
      await next();
    }
  });

// app.use(cors())  // 告诉浏览器允许跨域，解决跨域问题
app.use(bodyParser())  // 解析post请求
app.use(userRouter.routes(), userRouter.allowedMethods())  // 注册路由 生效路由

// 主要逻辑
// const main = (ctx) => {
//     ctx.body = 'Hello World'
// }

app.listen(3000, () => {
    console.log('项目已在3000端口启动');
})