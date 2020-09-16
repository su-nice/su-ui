import { getClassName } from "../../utils/component/component";
import { createPopper } from '@popperjs/core';

export default {
    name: 'Tooltip',
    props: {
        content: {
            type: String,
        },
        color: {
            type: String,
            default: '#ffffff'
        },
        bgColor: {
            type: String,
            default: '#303133'
        },
    },
    data() {
		return {
			contentInstance: null,
			popperInstance: null,
			visible: false,
            width: 0,
            timer: null,
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
    watch: {
        bgColor(value){
            this.$refs.content.style.setProperty('--bgColor', value);
        },
        color(value){
            this.$refs.content.style.setProperty('--color', value);
        }
    },
    methods: {
		handleMouseenter() {
            clearTimeout(this.timer);
			if (this.visible) {
				return;
			}
			this.show();
        },
        handleMouseleave(){
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.hide();
            }, 500);
        },
		show() {
			this.visible = true;
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
	},
	render() {
        let className = [getClassName('tooltip')];
		return (
			<div class={className} onMouseenter={this.handleMouseenter} onMouseleave={this.handleMouseleave}>
				{this.$slots.default}
				<div ref="content" v-show={this.visible} style={this.contentStyle} class={getClassName('tooltip', 'content')} onMouseenter={this.handleMouseenter} onMouseleave={this.handleMouseleave}>
					<div class={getClassName('tooltip', 'content', 'con')}>
                    {this.$slots.content || this.content}
                    </div>
					<div ref="arrow" class={getClassName('tooltip', 'arrow')}></div>
				</div>
			</div>
		);
	},
};
