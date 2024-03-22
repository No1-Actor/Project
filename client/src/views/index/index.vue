<template>
    <!-- 开屏广告 -->
    <div class="spread" v-show="adBack">
        <span class="jump" @click="jump">点击跳转<b>{{ adTime }}</b></span>
    </div>

    <div class="container">
        <Header />
        <Charts />
        <Chartstab />
        <Banner />
        <Recommend />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/header.vue'
import Charts from '@/components/charts.vue'
import Chartstab from '@/components/chartstab.vue'
import Banner from '@/components/banner.vue'
import Recommend from '@/components/recommend.vue'
// import axios from 'axios'
import { index } from '../../api/user.js'

const adBack = ref(true); // 广告显示，不需要用字符串 'true'
let adTime = ref(3); // 广告倒计时
let timer = null; // 广告倒计时定时器，使用 let 而不是 const

const play = () => {
    adTime.value--;
    if (adTime.value === 0) {
        adBack.value = false;
        clearInterval(timer); // 清除定时器
    }
};

const autoplay = () => {
    timer = setInterval(play, 1000); // 广告倒计时
};

onMounted(() => {
    autoplay();
    index()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
});

// 点击跳转退出广告
const jump = () => {
    adBack.value = false;
    clearInterval(timer); // 清除定时器
};
</script>

<style lang="css">
.container {
  max-width: 1080px;
  margin:auto;
}

/* 开屏广告 */
.spread {
    position: absolute;
    top:0;
    width: 100%;
    height: 100vh;
    background: url(@/assets/images/pic.jpg) no-repeat top center;
    background-size: cover;
    z-index: 999;
}
.spread .jump {
    position: absolute;
    top: 20px;
    right:20px;
}
.spread .jump b {
    margin-left: 10px;
}
</style>