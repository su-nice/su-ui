import { getClassName } from 'package/utils/component/component';
export default {
	name: 'tab',
	props: {
		value: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
            list: [],
            curIndex: 0,
            tab: [],
		};
    },
    watch: {
        value(value){
            this.curIndex = value;
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.setStyle(this.tab[this.curIndex].elm);
        });
    },
    methods: {
        handleClick(item, index, event) {
            if(item.disabled){
                return;
            }
            this.curIndex = index;
            this.$emit('input', index);
            this.setStyle(event.target);
        },
        setStyle(target){
            target.parentElement.style.setProperty('--target-width', target.clientWidth);
            target.parentElement.style.setProperty('--target-height', target.clientHeight);
            target.parentElement.style.setProperty('--target-left', target.offsetLeft);
            target.parentElement.style.setProperty('--target-top', target.offsetTop);
        }
    },
	render() {
        const tab = this.list.map((item, index) => {
            let labelClassName = [getClassName('tab', 'bar', 'label')];
            if(index === this.curIndex) {
                labelClassName.push(getClassName('tab', 'bar', 'label', 'active'));
            }
            if(item.disabled) {
                labelClassName.push(getClassName('tab', 'bar', 'label', 'disabled'));
            }
            return <div class={labelClassName} onClick={(event) => this.handleClick(item, index, event)}>{item.title}</div>;
        });
        this.tab = tab;
		return (
			<div class={getClassName('tab')}>
				<div class={getClassName('tab', 'bar')}>
					{tab}
				</div>
				{this.$slots.default}
			</div>
		);
	},
};
