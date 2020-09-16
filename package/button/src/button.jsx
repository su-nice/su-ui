import { getClassName } from 'package/utils/component/component';
export default {
    name: 'Button',
    props: {
        disabled: {
            type: Boolean,
        },
        type: {
            type: String,
            validator: value => ['primary', 'dashed', 'danger', 'link'].includes(value)
        }
    },
    methods: {
        handleClick(...arg){
            if(this.disabled){
                return;
            }
            this.$emit('click', arg);
        }
    },
	render() {
        let btnClassName = [getClassName('btn')];
        if(this.type){
            btnClassName.push(getClassName('btn', this.type));
        }
        if(this.disabled){
            btnClassName.push(getClassName('btn', 'disabled'));
        }
		return <button class={btnClassName} onClick={this.handleClick}>{this.$slots.default}</button>;
	},
};
