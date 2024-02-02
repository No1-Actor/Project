<template>
    <div class="lide">
        <!-- 底部弹出 -->
        <van-cell title="设置喜好" is-link @click="showPopup" />
        <van-popup
            v-model:show="show" round closeable   
            close-icon-position="top-left" 
            close-icon="arrow-down"
            position="bottom"
            :style="{ height: '60%' }">
                <div class="like-list">
                    <h4>选择你的喜好</h4>
                    <p>请选择你喜欢的分类：(已选择 {{num()}} 个)</p>
                    <ul>
                        <li v-for="(item, index) in likelist" :key="item.id" @click="changflag(item)" :class="item.flag ? 'addclass' : '' " >{{ item.name }}</li>
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

const likelist = ref([
    {name:'都市',id:1,flag:false},
    {name:'玄幻',id:2,flag:false},
    {name:'武侠',id:3,flag:false},
    {name:'仙侠',id:4,flag:false},
    {name:'历史',id:5,flag:false},
    {name:'科幻',id:6,flag:false},
    {name:'游戏',id:7,flag:false},
    {name:'体育',id:8,flag:false},
    {name:'军事',id:9,flag:false},
    {name:'悬疑',id:10,flag:false},
    {name:'灵异',id:11,flag:false},
    {name:'同人',id:12,flag:false},
])
// 选中标签
const changflag = (item) =>{
    item.flag = !item.flag
}
// 选中标签个数
const num = () => {
    return likelist.value.filter(item => item.flag).length
}

</script>

<style lang="less" scoped>
.like-list {
    padding: 0 20px;
}
.like-list h4 {
    text-align: center;
    font-size: 16px;
    padding: 20px;
}
.like-list p {
    font-weight: 600;
}
.like-list ul {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:15px;
    margin:10px 0;
    text-align: center;
}
.like-list ul li {
    background-color: #f1f1f1;
    border-radius: 10px;
    height: 30px;
    display: grid;
    align-items: center;
}
/* 选中的标签的样式 */
.like-list .addclass {
    background-color: #FBF2EB;
    color:#E2784D;
}
</style>