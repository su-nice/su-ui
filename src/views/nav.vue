<template>
	<nav class="nav">
		<ul>
			<li v-for="item in nav" :key="item.name" :class="{ active: $route.name === item.name }">
				<router-link :to="{ name: item.name }">{{ item.meta.title }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import { routes } from '@/router/index';
export default {
	data() {
		return {
			nav: routes,
		};
	},
};
</script>

<style lang="less" scoped>
.nav {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	overflow: auto;
	width: 300px;
	border-right: 1px solid #e1e1e1;
	ul {
		padding: 10px;
	}
	li {
    padding: 6px 10px;
    &.active{
      color: @primary;
    }
	}
}
</style>
