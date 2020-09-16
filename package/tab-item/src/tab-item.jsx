import { getClassName } from "../../utils/component/component";

export default {
	name: 'tab-item',
	props: {
		title: {
			type: String,
        },
        disabled: {
            type: Boolean,
        }
	},
	data() {
		return {};
	},
	computed: {
		isActive() {
			return this.$parent.curIndex === this.index;
		},
		index() {
			return this.$parent.list.findIndex(p => p === this);
		},
	},
	created() {
        this.$parent.list.push(this);
	},
	destroyed() {
		if (this.index !== -1) {
			this.$parent.list.splice(this.index, 1);
		}
	},
	render() {
        let className = [getClassName('tab-item')];
        if(this.isActive){
            className.push('active');
        }
		return <div class={className}>{this.$slots.default}</div>;
	},
	methods: {},
};
