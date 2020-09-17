import { getClassName, getNextIndex } from '../../utils/component/component';
import { createPopper } from '@popperjs/core';

export default {
	name: 'Tooltip',
	props: {
		trigger: {
			type: String,
			default: 'hover',
			validator: value => ['hover', 'click'].includes(value),
		},
		content: {
			type: String,
		},
		color: {
			type: String,
			default: '#ffffff',
		},
		bgColor: {
			type: String,
			default: '#303133',
		},
	},
	data() {
		return {
			contentInstance: null,
			popperInstance: null,
			visible: false,
			width: 0,
			zIndex: 0,
			timer: null,
		};
	},
	computed: {
		contentStyle() {
			let style = {
				minWidth: this.width + 'px',
				zIndex: this.zIndex,
			};
			return style;
		},
	},
	watch: {
		bgColor(value) {
			this.$refs.content.style.setProperty('--bgColor', value);
		},
		color(value) {
			this.$refs.content.style.setProperty('--color', value);
		},
	},
	beforeDestroy() {
		this.destroy();
	},
	methods: {
		handleClick(event) {
			event.stopPropagation();
			if (this.trigger === 'hover') {
				return;
			}
			clearTimeout(this.timer);
			if (this.visible) {
				this.hide();
			} else {
				this.show();
			}
		},
		handleMouseenter() {
			if (this.trigger === 'click') {
				return;
			}
			clearTimeout(this.timer);
			if (this.visible) {
				return;
			}
			this.show();
		},
		handleMouseleave() {
			if (this.trigger === 'click') {
				return;
			}
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				this.hide();
			}, 500);
		},
		show() {
			this.visible = true;
			this.zIndex = getNextIndex(this.zIndex);
			if (!this.popperInstance) {
				document.body.appendChild(this.$refs.content);
				this.popperInstance = createPopper(this.$el, this.$refs.content, {
					placement: 'bottom',
					modifiers: [
						{
							name: 'arrow',
							options: {
								element: this.$refs.arrow,
							},
						},
						{
							name: 'offset',
							options: {
								offset: [0, 8],
							},
						},
					],
				});
				this.$refs.content.style.setProperty('--color', this.color);
				this.$refs.content.style.setProperty('--bgColor', this.bgColor);
				document.documentElement.addEventListener('click', this.hide);
			}
			this.width = this.$el.offsetWidth;
			this.popperInstance.update();
		},
		hide() {
			this.visible = false;
		},
		destroy(){
			this.visible = false;
			if(this.$refs.content){
				this.$refs.content.parentNode.removeChild(this.$refs.content);
			}
			if(this.popperInstance){
				this.popperInstance.destroy();
			}
			this.popperInstance = null;
			document.documentElement.removeEventListener('click', this.hide);
			clearTimeout(this.timer);
			this.timer = null;
		},
	},
	render() {
		let className = [getClassName('tooltip')];
		return (
			<div class={className} onMouseenter={this.handleMouseenter} onMouseleave={this.handleMouseleave} onClick={this.handleClick}>
				{this.$slots.default}
				<div ref="content" v-show={this.visible} style={this.contentStyle} class={getClassName('tooltip', 'content')} onMouseenter={this.handleMouseenter} onMouseleave={this.handleMouseleave}>
					<div class={getClassName('tooltip', 'content', 'con')}>{this.$slots.content || this.content}</div>
					<div ref="arrow" class={getClassName('tooltip', 'arrow')}></div>
				</div>
			</div>
		);
	},
};
