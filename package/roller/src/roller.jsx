import { createIntersectionObserver } from '../../utils';
export default {
	name: 'roller',
	props: {
		value: {
			type: Boolean,
			default: true,
		},
		finished: {
			type: Boolean,
			default: false,
		},
		finishedText: {
			type: String,
			default: '没有更多了',
		},
	},
	data() {
		return {
			observer: null,
		};
	},
	mounted() {
		this.observe();
	},
	beforeDestory() {
		this.unobserve();
	},
	watch: {
		value(value) {
			if (value) {
				this.observe();
			}
		},
		finished(value) {
			if (value) {
				this.observer.unobserve(this.$refs.roller_footer);
				this.observer = null;
			}
		},
	},
	methods: {
		async observe() {
			try {
				if (this.observer) {
					return;
				}
				const Observer = await createIntersectionObserver();
				this.observer = new Observer(entries => {
					entries.forEach(entry => {
						// 相交率，默认是相对于浏览器视窗
						if (entry.intersectionRatio > 0) {
							this.onload();
						}
					});
				});
				this.observer.observe(this.$refs.roller_footer);
			} catch (err) {
				console.error(err);
			}
		},
		unobserve() {
			if (this.observer) {
				this.observer.unobserve(this.$refs.roller_footer);
				this.observer = null;
			}
		},
		onload() {
			this.$emit('input', true);
			this.$emit('onLoad');
		},
	},
	render() {
		let footerNode;
		if (this.$slots.footer) {
			footerNode = this.$slots.footer;
		} else if (this.value) {
			footerNode = <span>数据加载中...</span>;
		} else if (this.finished) {
			footerNode = <span>{this.finishedText}</span>;
		} else {
			footerNode = <span onClick={this.onload}>点击加载更多...</span>;
		}
		return (
			<div class="su-roller">
				{this.$slots.default}
				<div class="su-roller_footer" ref="roller_footer">
					{footerNode}
				</div>
			</div>
		);
	},
};
