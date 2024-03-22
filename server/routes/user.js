const router = require('koa-router')()
const jwt = require('../utils/jwt.js')
const { userLogin, userFind, userRegister } = require('../controllers/mysqlControl') // 引入数据库操作模块


router.post('/login', (ctx, next) => {
    let user = ctx.request.body // 获取前端传过来的参数
    console.log(user);
    // 去数据库中查看是否存在user中一样的账号密码
  //   const result = userLogin(user.username, user.password) 
  //   console.log(result);
  //   if (result.length) { //账号密码存在
  //     console.log(123);
  //     let jwtToken = jwt.sign({id: '1', username: user.username, admin: true})
  //     console.log(jwtToken);

  //     ctx.body = {
  //       code: 0,
  //       data: `您好${user.username}`,
  //       token: jwtToken
  //     }
      
  //     let data = {
  //         id: result[0].id,
  //         nickname: result[0].nickname,
  //         username: result[0].username,
  //     }
  //     ctx.body = {
  //         code: '8000',
  //         data: data,
  //         msg: '登录成功'
  //     } 
  // } else {
  //     ctx.body = {
  //         code: '8004',
  //         data: 'error',
  //         msg: '账号或密码错误'
  //     }
  // }
  if (1) {
    let jwtToken = jwt.sign({id: '1', username: user.username, admin: true})
    console.log(jwtToken);
    ctx.body = {
      code: 0,
      data: `您好${user.username}`,
      token: jwtToken
    }
  } else {
    ctx.body = {
      code: 1,
      data: '用户名或密码错误'
    }
  }
  }
)

//  首页的接口 校验前端在请求头当中是否携带token
router.post('/index', jwt.verify(), (ctx) => {
  try {
    ctx.body = {
      code: 0,
      data: "这是首页的数据"
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      data: error
    }
  }
})

module.exports = router