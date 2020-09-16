<template>
	<div class="">
		<demo1></demo1>
		<demo2></demo2>
	</div>
</template>

<script>
import demo1 from './demo-1';
import demo2 from './demo-2';
export default {
    components: {
        demo1,
        demo2
    },
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
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1);
				}

				// 加载状态结束
				this.loading = false;

				// 数据全部加载完成
				if (this.list.length >= 30) {
					this.finished = true;
				}
			}, 1000);
		},
	},
};
</script>

<style lang="less" scoped>
</style>
