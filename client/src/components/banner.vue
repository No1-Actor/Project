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
    {id:1,img_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2021%2F09%2F2501%2F231033624_1_20210925010834976&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1713514682&t=8fde49be9dfe26c12265e0c3a9477f47'},
    {id:2,img_url:'https://img0.baidu.com/it/u=4120070778,1326534427&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'},
    {id:3,img_url:'https://img1.baidu.com/it/u=4049906368,438977941&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'},
])
</script>

<style lang="css" scoped>
.banner {
    @apply
    p-4
    rounded-lg
    overflow-hidden
    /* padding: 10px;
    border-radius: 10px;
    overflow: hidden; */
}
.banner img {
    @apply
    rounded-lg
    h-40
    w-full
    object-cover
    /* border-radius: 10px;
    height: 200px;
    width: 100%;  */
}
</style>