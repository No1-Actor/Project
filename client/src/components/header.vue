<template>
    <div class="header">
        <div class="header-search">
            <div class="search-list">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="请输入书名、作者">
            </div>
        </div>
        <van-sticky>
                <ul class="header-tabs ">
                    <li>推荐</li>
                    <li>男生</li>
                    <li>女生</li>
                    <li>图书</li>
                    <li>新书</li>
                    <li>最新上架</li>
                </ul>
        </van-sticky>
        <div>
            <img src="@/assets/images/header.jpg" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
 .header-search {
    background-color: #F8D447;
    padding: 10px;
}
.search-list {
    background-color:rgba(255, 255, 255, .5);
    border-radius: 10px;
    padding: 10px;
}
.header-search input {
    border:0;
    background-color: transparent;
    margin-left: 10px;
}
.header-search input::placeholder,
.header-search i {
    color: #999;
}
.header-tabs {
    display: flex;
    justify-content: space-between;
    background-color: #F8D447;
    font-weight: 700;
    font-size: 16px;
    padding: 10px;
    color: #6F601B;
    /* position:sticky; */
    /* 粘性定位 */
} 
</style>