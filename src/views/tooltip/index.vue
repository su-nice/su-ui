<template>
	<div class="page">
		<div class="scroll">
            <div style="height:120px"></div>
			<su-tooltip>
				<su-button>显示</su-button>
				<div slot="content">这是事实</div>
			</su-tooltip>
		</div>
		<su-tooltip content="这是事实" bg-color="#f60">
			<su-button>显示</su-button>
		</su-tooltip>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page {
	height: 1000px;
}
.scroll {
    height: 100px;
    overflow: auto;
}
.su-tooltip {
	& + .su-tooltip {
		margin-left: 10px;
	}
}
</style>
