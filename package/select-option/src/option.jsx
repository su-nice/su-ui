import { getClassName } from "../../utils/component/component";

export default {
    name: 'Option',
	props: {
		value: {
			type: [String, Object, Number, Boolean],
		},
		label: {
			type: String,
		},
		disabeld: {
			type: Boolean,
		},
		type: {
			type: String,
			default: 'text',
			validator: value => ['button', 'text'].includes(value)
		}
	},
	computed: {
		curIndex() {
			if(this.type !== 'text'){
				return -1;
			}
			const index = this.$parent.result.findIndex(p => {
				if(typeof p.value === 'object'){
					return p[this.$parent.valueKey] === this.value[this.$parent.valueKey];
				} else {
					return p.value === this.value;
				}
			});
			return index;
		}
	},
	created(){
		this.$parent.list.push(this);
	},
	methods: {
		handleClick(event){
			if(this.type === 'button'){
				this.$emit('click', event);
			} else {
				this.$parent.handleClickOptions(this, this.curIndex);
			}
		}
	},
	render() {
		let className = [getClassName('select', 'option')];
		if(this.curIndex !== -1){
			className.push(getClassName('select', 'option', 'active'));
		}
		return <div class={className} onClick={this.handleClick}>
            {this.$slots.default || this.label || this.value}
        </div>;
	},
};
