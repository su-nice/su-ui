import { getClassName, getNextIndex } from '../../utils/component/component';
import { createPopper } from '@popperjs/core';
import guideCtrl from './guide-ctrl';
import guideItem from './guide-item';
import { getStyle } from '../../utils/tool/tool';
export default {
    components: {
        guideCtrl,
        guideItem
    },
	props: {
		list: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			visible: false,
			step: 0,
			zIndex: 0,
			isAppendToBody: false,
		};
	},
	watch: {
		visible(value){
			if(!this.isAppendToBody && value){
				document.body.appendChild(this.$el);
			}
		}
	},
	computed: {
		style(){
			return {
				zIndex: this.zIndex,
			};
		}
	},
	beforeDestroy() {
		this.destroy();
	},
	methods: {
        complete(){
            this.hide();
		},
		add(obj){
			this.list.push(obj);
		},
		remove(obj){
			const index = this.list.findIndex(p => p.el === obj.el);
			this.list.splice(index, 1);
		},
		show(step = 0) {
			this.step = step;
			this.visible = true;
			this.zIndex = getNextIndex(this.zIndex);
			const el = this.list[this.step].el;
			this.setElStyle(el);
            this.$nextTick(() => {
                if(!this.popperInstance){
					this.popperInstance = createPopper(el, this.$refs.guide, {
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
							{
								name: 'computeStyles',
								options: {
								  adaptive: false, 
								},
							},
						],
					});
				} else if(this.popperInstance.state.elements.reference !== el){
					this.$refs.guide.classList.add(getClassName('guide', 'transition'));
					this.popperInstance.state.elements.reference = el;
					this.popperInstance.update();
					this.setElStyle(el);
				}
            });
		},
		hide() {
			this.visible = false;
			this.clearGuideStyle();
		},
		clearGuideStyle(){
			const parentClassName = getClassName('guide', 'parent');
			const activeClassName = getClassName('guide', 'active');
			const relativeClassName = getClassName('guide', 'active', 'relative');
			document.body.querySelectorAll(`.${parentClassName}`).forEach(item => {
				item.classList.remove(parentClassName);
			});
			document.body.querySelectorAll(`.${activeClassName}`).forEach(item => {
				item.classList.remove(activeClassName);
			});
			document.body.querySelectorAll(`.${relativeClassName}`).forEach(item => {
				item.classList.remove(relativeClassName);
			});
		},
		setElStyle(el){
			this.clearGuideStyle();
			const parentClassName = getClassName('guide', 'parent');
			const activeClassName = getClassName('guide', 'active');
			const relativeClassName = getClassName('guide', 'active', 'relative');
			const position = getStyle(el, 'position');
			if(!position || position === 'static'){
				el.classList.add(relativeClassName);
			}
			el.classList.add(activeClassName);
			let parent = el.offsetParent;
			while(parent){
				parent.classList.add(parentClassName);
				parent = parent.offsetParent;
			}
		},
		destroy(){
			this.visible = false;
			if(this.popperInstance){
				this.popperInstance.destroy();
				this.popperInstance = null;
			}
			if(this.$refs.guide){
				this.$refs.guide.parentNode.removeChild(this.$refs.guide);
			}
			document.documentElement.removeEventListener('click', this.hide);
		},
	},
	render() {
		if (!this.visible) {
			return null;
		}
		return (
			<div class={getClassName('guide', 'container')} style={this.style}>
				<div class={getClassName('guide')} ref="guide">
					<div class={getClassName('guide', 'content')}>
						{this.list.map((item, index) => {
							return (
                                <guideItem data={item} v-show={index === this.step}></guideItem>
							);
						})}
					</div>
					<guideCtrl step={this.step} length={this.list.length} onChangeStep={this.show} onComplete={this.complete}></guideCtrl>
                    <div class={getClassName('guide', 'arrow')} ref="arrow"></div>
				</div>
			</div>
		);
	},
};
