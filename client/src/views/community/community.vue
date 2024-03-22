<template>
    <div class="community">
        <div class="community-hd">
            <div class="community-hd-item">
                <h3>推荐</h3>
            </div>
        </div>
        <div class="community-body">
            <div class="community-body-item" v-for="(item, index) in community" :key="index">
                <div class="community-item-hd">
                    <img src="https://img0.baidu.com/it/u=3979949991,2513156939&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                    <p>{{ item.name }}</p>
                    <span>{{ item.from }}</span>
                    <div class="community-share">
                        <van-cell class="iconfont icon-gengduo" @click="showShare = true"></van-cell>
                    </div>
                </div>
                <div class="community-item-title">
                    {{ item.title }}
                </div>
                <div class="community-item-img">
                    <img :src="item.img_url" alt="">
                </div>
                <div class="community-item-review">
                    <span><i class="iconfont icon-fenxiangzhuanfa"></i>111</span>
                    <span><i class="iconfont icon-comment"></i>222</span>
                    <span><i class="iconfont icon-aixin"></i>333</span>
                </div>
            </div>
            <!-- 分享面板 -->
            <van-share-sheet
                v-model:show="showShare"
                title="立即分享给好友"
                :options="options"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const community = ref([
{
    name: '小明',
    title: '精彩分享',
    from: '作者A',
    hd_img: '头像1.png',
    img_url: 'https://img2.baidu.com/it/u=2828798256,2471502874&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
  },
  {
    name: '阿丽',
    title: '最新动态',
    from: '作者B',
    hd_img: '头像2.png',
    img_url: 'https://img0.baidu.com/it/u=2021266978,582980172&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
  },
  {
    name: '张三',
    title: '今日心情',
    from: '作者C',
    hd_img: '头像3.png',
    img_url: 'https://img0.baidu.com/it/u=2616823501,3205478532&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500'
  },
  {
    name: '李四',
    title: '美食分享',
    from: '作者D',
    hd_img: '头像4.png',
    img_url: 'https://img2.baidu.com/it/u=3086837686,3956476594&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
  },
  {
    name: '王五',
    title: '旅行日记',
    from: '作者E',
    hd_img: '头像5.png',
    img_url: 'https://img0.baidu.com/it/u=906948304,671871883&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
  },
])

const showShare = ref(false);
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];
</script>

<style lang="css" scoped>
.community-hd {
    position:fixed;
    top:0;
    left:0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    box-shadow: 0 0 10px 1px #ddd;
}
.community-hd-item {
    max-width: 1080px;
}
.community-hd-item h3 {
    font-size: 20px;
    padding: 10px;
}
.community-body {
    margin-top: 50px;
    background-color: #F3F3F3;
    padding: 10px;
}
.community-body-item {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 10px;
}
.community-item-hd {
    display: flex;
    align-items: center;
}
.community-item-hd img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.community-item-hd p {
    margin:0 10px;
}
.community-item-hd span {
    color: var(--bgcolor);
    font-size: 12px;
    flex: 1;
}
.community-share :deep(.van-cell)  {
    color: #999;
    font-size: 22px;
}

/* 多行省略号显示 */
.community-item-title {
    margin: 10px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 
    overflow: hidden;
}
.community-item-img {
    display: flex;
}
.community-item-img img {
    max-width: 50%;
    overflow: hidden;
    margin: 0 5px;
}
.community-item-review {
    text-align: center;
    margin-top: 20px;
}
.community-item-review span {
    margin: 0 20px;
}
</style>