<template>
    <su-roller class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @onLoad="onLoad">
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </su-roller>
</template>

<script>
export default {
	data() {
		return {
            list: [],
            finished: false,
            loading: false,
		};
	},
	methods: {
		onLoad() {
			// 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
			setTimeout(() => {
				for (let i = 0; i < 20; i++) {
					this.list.push(this.list.length + 1);
				}

				// 加载状态结束
				this.loading = false;

				// 数据全部加载完成
				if (this.list.length >= 50) {
					this.finished = true;
				}
			}, 1000);
		},
	},
};
</script>

<style lang="less" scoped>
</style>
