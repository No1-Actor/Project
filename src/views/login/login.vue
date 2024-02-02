<template>
  <div class="login">
    <div class="login-list">
      <div @click="goBack">X</div>
      <h2>欢迎登录</h2>
      <p>发现更多精彩好书</p>
      <input type="text" placeholder="请输入手机号" />
      <input type="password" placeholder="请输入密码" />
      <div class="agreement">
        <input type="checkbox" />
        <span>阅读并同意《用户服务协议》及《隐私政策》</span>
      </div>
      <button @click="goBack">登录</button>
      <div class="login-title">
        <span>手机验证码登录</span>
        <span>忘记密码</span>
      </div>
    </div>
    <div class="login-way">
      <p>其它登录方式</p>
      <ul>
        <li>
          <i class="iconfont icon-weixin"></i>
          <p>微信</p>
        </li>
        <li>
          <i class="iconfont icon-QQ"></i>
          <p>QQ</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.login-list {
  padding: 20px;
}
.login-list h2 {
  font-size: 24px;
  margin-top: 20px;
  letter-spacing: 2px;
}
.login-list p {
  font-weight: 500;
  letter-spacing: 3px;
  padding: 5px 0;
}
.login-list > input {
  border: 0;
  width: 100%;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  margin-top: 20px;
  padding-bottom: 8px;
}
.login-list input::placeholder {
  color: #ddd;
}
.agreement {
  display: flex;
  font-size: 12px;
  height: 60px;
  align-items: center;
}
.agreement [type="checkbox"] {
  margin-right: 5px;
}
.login-list > button {
  width: 100%;
  height: 40px;
  background-color: var(--bgcolor);
  border: 0;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
.login-title {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
}
.login-way {
  text-align: center;
  height: 100px;
}
.login-way p {
  font-size: 12px;
  color: #999;
}
.login-way ul li {
  margin: 20px;
  display: inline-block;
}
.login-way ul li i {
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 6px;
  font-size: 20px;
}
.login-way ul li p {
  margin-top: 10px;
}
</style>
