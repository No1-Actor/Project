const jwt = require('jsonwebtoken')

// sign用于生成token，666作为加密的私钥可以自行定义
function sign(option) {
  return jwt.sign(option, '666', {
    expiresIn: 60 // 当前设定过期时间在60秒之后
  })
} 

const verify = () => (ctx, next) => {
  let jwtToken = ctx.req.headers.authorization
  if (jwtToken) {
    // 校验
    jwt.verify(jwtToken, '666', (err, decode) => {
      if (err) {  // 前端传过来的token有问题
        ctx.body = {
          status: 401,
          message: 'token失效'
        }
      } else {
        next()
      }
    })
  } else {
    ctx.body = {
      status: 401,
      message: '请提供token'
    }
  }
} 

module.exports = {
  sign,
  verify
}
