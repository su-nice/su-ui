<template>
    <div>
        <su-tab>
            <su-tab-item title="选项卡一">123</su-tab-item>
            <su-tab-item title="选项卡二" :disabled="true">1234</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
        </su-tab>
        <br />

        <su-tab v-model="tab">
            <su-tab-item title="选项卡一">123</su-tab-item>
            <su-tab-item title="选项卡二">1234</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
            <su-tab-item title="选项卡二">1234</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
            <su-tab-item title="选项卡二">1234</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
            <su-tab-item title="选项卡二">1234</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
            <su-tab-item title="选项卡二">1234</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
            <su-tab-item title="长度选项卡三">12345</su-tab-item>
        </su-tab>
    </div>
</template>
    
<script>
export default {
    data(){
        return {
            tab: 2
        };
    }
};
</script>

<style lang="less" scoped>

</style>