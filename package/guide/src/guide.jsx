import { getClassName } from '../../utils/component/component';
import { createPopper } from '@popperjs/core';
import guideCtrl from './guide-ctrl';
import guideItem from './guide-item';
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
		};
	},
	methods: {
        complete(){
            this.hide();
        },
		show(step = 0) {
			this.step = step;
            this.visible = true;
            const el = this.list[this.step].el;
            this.$nextTick(() => {
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
                    ],
                });
            });
			
		},
		hide() {
			this.visible = false;
		},
	},
	render() {
		if (!this.visible) {
			return null;
		}
		return (
			<div class={getClassName('guide', 'container')}>
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
