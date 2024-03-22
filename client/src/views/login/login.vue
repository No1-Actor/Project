<template>
  <div class="login">
    <div class="login-list">
      <h2>欢迎登录</h2>
      <p>发现更多精彩好书</p>
      
      <!-- <input type="text" placeholder="请输入账号" v-model="username"/>
      <input type="password" placeholder="请输入密码" v-model="password"/> -->
      
  <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="username"
      label="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写账号' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>
      

      <!-- <div class="agreement">
        <input type="checkbox" />
        <span>阅读并同意《用户服务协议》及《隐私政策》</span>
      </div>
      <button @click="onSubmit">登录</button> -->
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
import { onMounted, ref } from 'vue';  
import { useRouter } from 'vue-router';
import axios from 'axios';
import { login } from '../../api/user.js';

const router = useRouter();

const username = ref('');
const password = ref('');

const onSubmit = (values) => {
    // console.log(values);
    // axios.post('http://localhost:3000/login', values).then((res) => {
    //   console.log(res.data); // 后端返回的结果
    //   localStorage.setItem('token', res.data.token); // 保存token到本地存储
    //   router.push('../index'); // 登录成功后跳转到首页
    // })
    const res2 = axios.post('/login', {
      username: username,
      password: password,
    })
    console.log(res2);

    login(values).then((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      router.push('/index')
    })

    // 发送请求，将state.username, state.password传给后端
    // const res = await axios.post('/login', {      // 向后端发送请求
    //     username: state.username,
    //     password: state.password,
    // })
};

// 添加防抖函数
// const debounce = (func, delay) => {
//   let timer = null;
//   return function(...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };
// const debouncedSubmit = debounce(onSubmit, 1000); 

</script>

<style lang="css">
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
