<template>
    <div class="charts">
        <h4>排行榜</h4>
        <Popup />
    </div>
</template>

<script setup>
import Popup from '@/components/popup.vue'

</script>

<style lang="css" scoped>
.charts {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
}
.charts h4 {
    font-size: 16px;
}
</style>