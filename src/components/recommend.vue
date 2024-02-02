<template>
    <div class="recommend">
        <div class="recommend-like">
            <h3>为你推荐</h3>
            <Like />
        </div>
        <div class="recommend-list" v-for="(item, index) in recommendList" :key="index">
            <ul>
                <li>
                    <div class="recommend-img">
                        <img :src="item.img_url" alt="">
                    </div>
                    <div class="recommend-title">
                        <h4>{{ item.title }}</h4>
                        <p class="recommend-title-author">{{ item.author }}</p>
                        <p class="recommend-title-desc">{{ item.desc }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Like from './like.vue'

const recommendList = ref([
    {title:'剑来',img_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708410432&t=f8597f672e008b63a5fd8f0ed915d8e0',author:'名字',desc:'内容'},
    {title:'剑来',img_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708410432&t=f8597f672e008b63a5fd8f0ed915d8e0',author:'名字',desc:'内容'},
    {title:'剑来',img_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708410432&t=f8597f672e008b63a5fd8f0ed915d8e0',author:'名字',desc:'内容'},
    {title:'剑来',img_url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708410432&t=f8597f672e008b63a5fd8f0ed915d8e0',author:'名字',desc:'内容'},
])

</script>

<style lang="less" scoped>
.recommend {
    padding: 10px;
}
.recommend-like {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.recommend-like h3::before {
    content:'';
    width: 66px;
    height: 10px;
    background: linear-gradient(transparent 20%,var(--bgcolor));
    position: absolute;
    bottom:8px;
    left: 0;
}
.recommend-list {
    margin-top: 10px;
}
.recommend-list ul li {
    display:flex;
    justify-content: space-between;
    height: 120px;
    margin-bottom: 20px;
}
.recommend-img {
    width:25%;
}
.recommend-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.recommend-title {
    width: 70%;
}
/* 单行省略 */
.recommend-title h4 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
}
.recommend-title p {
    color: #999;
    font-size: 12px;
}
.recommend-title-author {
    height: 20px;
}
.recommend-title-desc {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
</style>