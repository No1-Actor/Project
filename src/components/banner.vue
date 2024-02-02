<template>
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
            <van-swipe-item v-for="(item, index) in bannerList" :key="item.id">
                <img :src="item.img_url" alt="">
            </van-swipe-item>
        </van-swipe>
    </div> 
</template>

<script setup>
import { ref } from 'vue';

const bannerList = ref([
    {id:1,img_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708410432&t=f8597f672e008b63a5fd8f0ed915d8e0'},
    {id:2,img_url:'https://img2.baidu.com/it/u=1814561676,2470063876&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'},
])
</script>

<style lang="less" scoped>
.banner {
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
}
.banner img {
    border-radius: 10px;
    height: 200px;
    width: 100%; 
}
</style>