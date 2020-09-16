<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view class="main" />
  </div>
</template>
<script>
import Navigation from '@/views/nav';
export default {
  components: {
    Navigation,
  },
  data(){
    return {
    };
  }
};
</script>
<style lang="less">
.main{
  padding: 20px;
  margin-left: 300px;
}
</style>
