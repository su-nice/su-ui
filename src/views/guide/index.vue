<template>
	<div class="page">
		<p>
			<su-button data-guide="guide-1">提示1</su-button>
			<su-button data-guide="guide-2">提示2</su-button>
			<su-button data-guide="guide-3">提示3</su-button>
			<su-button data-guide="guide-4">提示4</su-button>
		</p>
		<br />
		<div>
			<su-button @click="show" type="primary">显示</su-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			guide: null,
		};
	},
	methods: {
		show() {
            this.guide = new this.$guide({
			list: [
				{
					el: this.$el.querySelector('[data-guide="guide-1"]'),
					render: (
						<div>
							<h4 onClick={this.handleClick}>提示1</h4>
							<p>都可以，</p>
						</div>
					),
				},
				{
					el: this.$el.querySelector('[data-guide="guide-2"]'),
					title: '提示2',
					content: '都可以，',
				},
				{
					el: this.$el.querySelector('[data-guide="guide-3"]'),
					title: '提示3',
					content: '都可以，',
				},
				{
					el: this.$el.querySelector('[data-guide="guide-4"]'),
					title: '提示4',
					content: '都可以，',
				},
			],
		});
			this.guide.show();
		},
		handleClick() {
			this.$message.warning('123');
		},
	},
};
</script>
<style lang="less" scoped></style>
