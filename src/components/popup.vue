<template>
    <div class="popup">
        <van-cell title="热门分类" is-link @click="showPopup" />
        <!-- 右侧弹出 -->
        <van-popup closeable
            close-icon-position="top-left"
            v-model:show="show"
            position="right"
            :style="{ width: '70%', height: '100%' }">
            <div class="popuplist">
                <h4>热门分类</h4>
                <ul>
                    <li v-for="(item, index) in popuplist" :key="index" :class="num==index ? 'active' : ''" @click="num=index">{{ item }}</li>
                </ul>
            </div>
        </van-popup>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const showPopup = () => {
    show.value = true;
};
const popuplist = ref(['首页','都市','历史','游戏','悬疑']);
const num = ref(0)

</script>

<style lang="less" scoped>
.popuplist {
    text-align: center;
    padding: 10px
}
.popuplist h4 {
    padding: 10px;
}
.popuplist ul {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
}
.popuplist ul li {
    background-color: #F1F1F1;
    border-radius: 5px;
    padding:10px 0;
}
.popuplist .active {
    background-color: #F5CB3B;
    color: #fff;
}
</style>