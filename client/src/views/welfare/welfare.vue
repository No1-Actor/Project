<template>
    <div class="welfare">
        <div class="welfare-hd">
            <h3>登录后现金红包天天领</h3>
            <router-link to="/login">
                <button>登录查看</button>
            </router-link>
        </div>
        <div class="welfare-body">
            <div class="welfare-body-item1">
                <h4>做任务 赚金币</h4>
                <p class="welfare-text1">看视频赚2000金币</p>
                <p class="welfare-text2">每次得200金币，可重复</p>
                <button class="btn">去观看</button>
            </div>
            <div class="welfare-body-item2">
                <p class="welfare-text1">每日阅读任务</p>
                <p class="welfare-text2">持续阅读可得海量金币，看越多赚越多</p>
                <button class="btn2">去看书</button>
                <van-steps :active="active" active-color="#E76C3B">
                    <van-step v-for="(item,index) in steps" :key="index">
                        <div class="welfare-icon">
                            <img src="@/assets/images/gold.png" alt="">
                            <span>{{ item.num }}</span>
                        </div>
                        <p>{{ item.name }}</p>
                    </van-step>
                </van-steps>
            </div>
            <div class="welfare-body-item3">
                <div class="welfare-item3-list">
                    <p class="welfare-text1">每日阅读任务</p>
                    <img src="@/assets/images/gold.png" alt="">
                    <span>100金币</span>
                </div>
                <p class="welfare-text2">持续阅读可得海量金币，看越多赚越多</p>
                <button class="btn2">去看书</button>
            </div>
            <div class="welfare-body-item3">
                <div class="welfare-item3-list">
                    <p class="welfare-text1">每日阅读任务</p>
                    <img src="@/assets/images/gold.png" alt="">
                    <span>100金币</span>
                </div>
                <p class="welfare-text2">持续阅读可得海量金币，看越多赚越多</p>
                <button class="btn2">去看书</button>
            </div>
            <div class="welfare-body-item3">
                <div class="welfare-item3-list">
                    <p class="welfare-text1">每日阅读任务</p>
                    <img src="@/assets/images/gold.png" alt="">
                    <span>100金币</span>
                </div>
                <p class="welfare-text2">持续阅读可得海量金币，看越多赚越多</p>
                <button class="btn2">去看书</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const steps = ref([
    {name:'3分钟',num:'100'},
    {name:'5分钟',num:'120'},
    {name:'30分钟',num:'150'},
    {name:'120分钟',num:'170'},
    {name:'180分钟',num:'200'},
])

</script>

<style lang="css" scoped>
.welfare-hd {
    background:url(../../assets/images/bg.jpg) no-repeat top center;
    background-size: contain;
    height: 160px;
    color:#FCFDD0;
}
.welfare-hd h3 {
    font-size: 20px;
    font-weight: 500;
    padding: 40px 0 0 20px;
}
/* 登录查看按钮 */
.welfare-hd button {
    border:0;
    background-color: #FCFDD0;
    color: #E76C3B;
    border-radius: 20px;
    padding: 5px 10px;
    font-weight: 600;
    margin: 20px;
}
.welfare-body {
    padding: 0 10px;
}
.welfare-body-item1,
.welfare-body-item2,
.welfare-body-item3 {
    position: relative;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}
.welfare-body-item1 h4 {
    font-size: 16px;
    margin: 20px 0;
}
.welfare-text1 {
    font-weight: 600;
    margin-bottom: 5px;
}
.welfare-text2 {
    color: #999;
    font-size: 12px;
    margin: 10px 0;
}
.welfare .btn {
    border:0;
    border-radius: 20px;
    padding: 5px 10px;
    font-weight: 600;
}
.welfare-body-item1 button {
    background-color: #E76C3B;
    color: #FCFDD0;
    position: absolute;
    bottom: 20px;
    right: 0;
}
.welfare .btn2 {
    position: absolute;
    top: 20px;
    right: 0;
    background-color:#F6EDE6;
    color: #E76C3B;
    border:0;
    border-radius: 20px;
    padding: 5px 10px;
    font-weight: 600;
}
/* 步骤条 */
.welfare-icon {
    height: 40px;
    position: relative;
}
.welfare img {
    width: 20px;
    height: 20px;
}
.welfare-icon span {
    position: absolute;
    top: 3px;
}

.welfare-item3-list {
    display: flex;
    align-items: center;
}
.welfare-item3-list img {
    margin: 0 5px;
}
.welfare-item3-list span {
    font-weight: 600;
    color:#E76C3B;
    font-size: 12px;
}
</style>