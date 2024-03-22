<template>
    <div class="mine">
        <div class="mine-hd">
            <div class="mine-hd-login">
                <div class="mine-hd-img">
                    <img src="https://img0.baidu.com/it/u=3979949991,2513156939&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                </div>
                <div class="mine-hd-item">
                    <div class="tourist">游客</div>
                    <router-link to="/login">
                        <button>点击登录</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="mine-body">
            <div class="mine-body-item1">
                <ul>
                    <li>
                        <i class="iconfont icon-biyan"></i>
                        <p>我的金币</p>
                    </li>
                    <li>
                        <i class="iconfont icon-biyan"></i>
                        <p>我的积分</p>
                    </li>
                    <li>
                        <i class="iconfont icon-biyan"></i>
                        <p>我的收藏</p>
                    </li>
                </ul>
            </div>
            <div class="mine-body-item2">
                <ul>
                    <li v-for="(item,index) in mineItem2" :key="index">
                        <i class="iconfont" :class="item.icon"></i>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <div class="mine-body-item3">
                <ul>
                    <li v-for="(item,index) in mineItem3" :key="index">
                        <i class="iconfont" :class="item.icon"></i>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <div class="mine-body-item4">
                <ul>
                    <li v-for="(item,index) in mineItem4" :key="index">
                        <p>{{ item }}</p>
                        <i class="iconfont icon-you"></i>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const mineItem2 = ref([
    {title:'阅读历史',icon:'icon-lishi'},
    {title:'金选票',icon:'icon-dianyingpiao'},
    {title:'书友圈',icon:'icon-quanquanmendianb'},
    {title:'消息通知',icon:'icon-xiaoxitongzhi'},

])

const mineItem3 = ref([
    {title:'阅读历史',icon:'icon-lishi'},
    {title:'金选票',icon:'icon-dianyingpiao'},
    {title:'书友圈',icon:'icon-quanquanmendianb'},
    {title:'消息通知',icon:'icon-xiaoxitongzhi'},
    {title:'阅读历史',icon:'icon-lishi'},
    {title:'金选票',icon:'icon-dianyingpiao'},
    {title:'书友圈',icon:'icon-quanquanmendianb'},
    {title:'消息通知',icon:'icon-xiaoxitongzhi'},
])

const mineItem4 = ref([
    '消息中心','奖励中心','以购书籍','意见反馈'
])

</script>

<style lang="css" scoped>
.mine-hd {
    background-color: #F8D447;
    height: 160px;
    width: 100%;
}
.mine {
    background-color: #F3F1F2;
}
.mine-hd-login {
    display: flex;
    align-items: center;
    padding: 20px;
}
.mine-hd-img {
    margin-right: 20px;
}
.mine-hd-img img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.tourist {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}
.mine-hd-item button {
    border-radius: 20px;
    padding: 5px 8px;
    border:0;
    background:none;
    border: 1px solid #333;
}
.mine-body-item1 {
    background:linear-gradient(90deg,#22190E,#3D2E21,#22190E);
    color:#E7D8BA;
    border-radius: 10px;
    padding: 10px;
    margin: -40px 10px 10px 10px;
}
.mine-body-item1 ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.mine-body-item1 ul i {
    font-size: 24px;
}
.mine-body-item1 ul p {
    margin-top: 10px;
    font-size: 12px;
}
.mine-body-item1 ul li {
    position: relative;
    flex:1;
}
.mine-body-item1 ul li:not(:last-child):after {
    content: '';
    position: absolute;
    top: 0;
    right:0;
    height: 100%;
    border: 1px solid #4F3822;
}

.mine-body-item2,
.mine-body-item3,
.mine-body-item4 {
    padding-bottom: 10px;
}
.mine-body-item2 ul {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    text-align: center;
}
.mine-body-item2 ul i,
.mine-body-item3 ul i {
    font-size: 26px;
}
.mine-body-item3 ul {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    background-color: #fff;
    padding: 20px 0;
    text-align: center;
}
.mine-body-item3 ul li {
    padding: 10px 0;
}
.mine-body-item4 {
    background-color: #fff;
}
.mine-body-item4 ul {
    padding: 10px;
}
.mine-body-item4 li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
    padding: 10px;
    margin: 10px;
}
.mine-body-item4 li p {
    font-size: 16px;
    font-weight: 600;
}
</style>