<template>
	<div>
		<su-select style="width:140px;">
			<su-option v-for="item in list" :key="item" :value="item">{{ item }}</su-option>
			<su-option type="button" @click.stop="add">add</su-option>
		</su-select>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [0, 1],
		};
	},
	methods: {
		add() {
			this.list.push(this.list.length);
		},
	},
};
</script>

<style lang="less" scoped></style>
