<template>
    <div class="footer">
        <div class="footer-seat">
            <div class="footer-list">
                <ul>
                    <li v-for="(item,index) in footerlist" :key="index">
                        <router-link :to="item.path"> 
                            <i class="iconfont" :class="item.icon"></i>
                            <p>{{item.title}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const footerlist = ref([
    {title:'书城',icon:'icon-ziliaoku',path:'/index'},
    {title:'社区',icon:'icon-shequ-active',path:'/community'},
    {title:'福利',icon:'icon-fuli',path:'/welfare'},
    {title:'我的',icon:'icon-wodedamaijihuo',path:'/mine'},
])
</script>

<style lang="css">
/* 底部导航 */
.footer {
    height: 60px;
}
.footer-seat {
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #eee;
    background-color: #fff;
}
.footer-list {
    max-width: 1080px;
    height: 60px;
    margin:auto;
}
.footer-list ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    text-align: center;
}
.footer-list ul i {
    font-size: 20px;
}
</style>