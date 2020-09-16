import { getClassName } from '../../utils/component/component';
import { createPopper } from '@popperjs/core';
export default {
	name: 'Select',
	props: {
		value: {
			type: [String, Object, Boolean, Number],
		},
		valueKey: {
			type: String,
			default: 'value',
		},
		placeholder: {
			type: String,
			default: '请选择',
		},
		multi: {
			type: Boolean,
		},
	},
	data() {
		return {
			contentInstance: null,
			popperInstance: null,
			visible: false,
			list: [],
			result: [],
			width: 0,
		};
	},
	computed: {
		contentStyle() {
			let style = {
				minWidth: this.width + 'px',
			};
			return style;
		},
	},
	created() {
		this.initValue();
	},
	beforeDestory() {
		document.documentElement.removeEventListener('click', this.hide);
	},
	methods: {
		initValue() {
			if (!this.value) {
				return;
			}
			this.result = [].concat(this.value);
		},
		handleClick(event) {
			event.stopPropagation();
			if (this.visible) {
				this.hide();
			} else {
				this.show();
			}
		},
		handleClickContent(event) {
			event.stopPropagation();
		},
		handleClickOptions(instance, subIndex) {
			const result = {
				value: instance.value,
				label: instance.label || instance.value,
			};
			if (!this.multi) {
				this.result = [result];
				return;
			}
			if (subIndex === -1) {
				// 勾选
				this.result.push({
					value: instance.value,
					label: instance.label || instance.value,
				});
			} else {
				// 取消
				this.result.splice(subIndex, 1);
			}
		},
		show() {
			this.visible = true;
			if (!this.popperInstance) {
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
				document.documentElement.addEventListener('click', this.hide);
			}
			this.width = this.$el.offsetWidth;
			this.popperInstance.update();
		},
		hide() {
			this.visible = false;
		},
	},
	render() {
		let className = [getClassName('select')],
			result = '';
		if (this.result.length === 0) {
			result = <input class={getClassName('select', 'input')} placeholder={this.placeholder} readOnly />;
		} else if (this.multi) {
			result = (
				<div class={getClassName('select', 'result')}>
					{this.result.map(item => {
						return (
							<span class={getClassName('select', 'result', 'label')}>
								<span class={getClassName('select', 'result', 'label', 'text')}>{item.label}</span>
								<i class={getClassName('select', 'result', 'close')}></i>
							</span>
						);
					})}
				</div>
			);
		} else {
			result = <input class={getClassName('select', 'input')} placeholder={this.placeholder} value={this.result[0].label} readOnly />;
		}
		return (
			<div class={className} onClick={this.handleClick}>
				{result}
				<div ref="content" v-show={this.visible} style={this.contentStyle} class={getClassName('select', 'content')} onClick={this.handleClickContent}>
					{this.$slots.default}
					<div ref="arrow" class={getClassName('select', 'arrow')}></div>
				</div>
			</div>
		);
	},
};
