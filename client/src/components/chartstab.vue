<template>
    <div class="chartstab">
        <van-tabs v-model:active="active">
            <van-tab :title="item.title" v-for="(item,index) in chartstab" :key="index">
                <div class="chartstab-content">
                    <div class="chartstab-item">
                        <div class="chartstab-list" v-for="(item,index) in item.content" :key="index">
                            <div class="chartstab-img">
                                <img :src="item.img_url">
                            </div>
                            <div class="chartsta-title"> 
                               <h4>{{ item.name }}</h4>
                               <p>{{ item.describe }}</p>
                               <p>{{ item.num  }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);

const chartstab = ref([
    {title:'全部', content:[
  { name: '剑来', img_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708410432&t=f8597f672e008b63a5fd8f0ed915d8e0', describe: '剑破万法，剑通神明。', num: '影视连载1032万字' },
  { name: '择天记', img_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F14%2F20160514105801_hjtYS.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1713685056&t=c92edb2b9e918652a292adcf15caafc2', describe: '命途多舛，弃天命。', num: '影视连载987万字' },
  { name: '全职高手', img_url: 'https://img2.baidu.com/it/u=1341010749,787415324&fm=253&fmt=auto&app=120&f=JPEG?w=517&h=653', describe: '电竞之巅，谁与争锋。', num: '影视连载920万字' },
  { name: '斗破苍穹', img_url: 'https://img.name2012.com/uploads/allimg/2016-11/23-050527_717.jpg', describe: '穷奇苦零，唯我独尊。', num: '影视连载889万字' },
  { name: '天珠变', img_url: 'https://img1.baidu.com/it/u=3290649533,1721917945&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=709', describe: '珠光宝气，天下变色。', num: '影视连载842万字' },
  { name: '庆余年', img_url: 'https://img0.baidu.com/it/u=1889752534,2462586899&fm=253&fmt=auto&app=138&f=JPEG?w=497&h=627', describe: '红颜多薄命。', num: '影视连载789万字' },
  { name: '将夜', img_url: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/bd315c6034a85edfa47cb8c248540923dc54755a.jpg', describe: '夜幕降临，黑暗来袭。', num: '影视连载754万字' },
  { name: '择天记', img_url: 'https://img1.baidu.com/it/u=3202859034,2557085613&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666', describe: '逆天改命，逐梦前行。', num: '影视连载701万字' },
  ]},
    {title:'都市', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
    {title:'历史', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
    {title:'科幻', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
    {title:'玄幻', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
    {title:'武侠', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
    {title:'军事', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
    {title:'游戏', content:[{name:'内容 1'}, {name:'内容 2'}, {name:'内容 3'}, {name:'内容 4'}, {name:'内容 5'},]},
])

</script>

<style lang="css" scoped>
.chartstab :deep(.van-tabs)  {
    overflow-x: auto;
    -webkit-mask:linear-gradient(90deg,#000 80%,transparent);
    mask:linear-gradient(90deg,#000 80%,transparent);
}
.chartstab :deep(.van-tab)  {
    background-color: #f1f1f1;
    border-radius: 20px;
    margin: 0 6px;
    white-space: nowrap;
    padding: 0 15px;
}
.chartstab :deep(.van-tabs__line)  {
    background: transparent;
    height: 30px;
}
.chartstab :deep(.van-tabs__wrap)  {
    height: 30px;
}
.chartstab :deep(.van-tab--active)  {
    background-color: var(--bgcolor);
    color:#333;
}
.chartstab-content::-webkit-scrollbar {
    display: none;
}
.chartstab-content {
    display: flex;
    height: 310px;
    overflow-x: auto;
    margin-top: 20px;
}
.chartstab-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    counter-reset: count;
}
.chartstab-list {
    display: flex;
    width: 200px;
    height: 65px;
    margin: 6px;
}
.chartstab-img {
    width: 22%;
}
.chartstab-img img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
}
.chartsta-title {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
}
.chartsta-title p {
    color: #999;
    font-size: 12px;
    white-space: nowrap;
}
.chartsta-title::before {
    counter-increment: count;
    content: counter(count);
    position: absolute;
    top: 5px;
    left: -15px;
}
.chartstab-list:nth-child(-n+3) .chartsta-title::before {
    color: red;
}
</style>