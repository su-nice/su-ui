<template>
	<div>
		<su-button @click="handleClick('default', '默认')">默认</su-button>
		<su-button @click="handleClick('success', '成功')">成功</su-button>
		<su-button @click="handleClick('error', '失败')">失败</su-button>
		<su-button @click="handleClick('warning', '警告')">警告</su-button>
	</div>
</template>

<script>
export default {
	methods: {
		success() {
			setTimeout(() => {
				this.$message.success({
					type: 'success',
					message: '操作成功',
				});
			}, 1000);
			this.$message.success({
				type: 'success',
				message: <su-button onclick={this.handleClick}>点击我</su-button>,
				time: 10000,
			});
		},
		handleClick(type, msg) {
			this.$message.success({
				type: type,
				message: `操作${msg}`,
			});
		},
	},
};
</script>
