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
            translateX: 0,
            barWidth: 0,
            offsetWidth: 0,
            showCtrl: false,
		};
    },
    computed: {
        prevShow(){
            return this.showCtrl && this.translateX !== 0;
        },
        nextShow(){
            return this.showCtrl && this.offsetWidth - this.barWidth + this.translateX > 0;
        },
        listStyle(){
            return {
                transform: `translateX(${this.translateX}px)`
            };
        }
    },
    watch: {
        value(value){
            this.curIndex = value;
        }
    },
    mounted(){
        this.curIndex = this.value;
        this.$nextTick(() => {
            this.barWidth = this.$refs.bar.clientWidth;
            this.offsetWidth = this.$refs.list.offsetWidth;
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
            if(target.clientWidth + target.offsetLeft + this.translateX - this.barWidth > 0) { 
                console.log(1);
                this.translateX = this.barWidth - target.clientWidth - target.offsetLeft;
            } else if(target.offsetLeft + this.translateX < 0){
                this.translateX = this.translateX + target.clientWidth;
            }
        },
        handleMouseenter(){
            this.barWidth = this.$refs.bar.clientWidth;
            this.offsetWidth = this.$refs.list.offsetWidth;
            this.showCtrl = true;
        },
        handleMouseleave(){
            this.showCtrl = false;
        },
        handlePrev(){
            if(Math.abs(this.translateX) > this.barWidth) {
                this.translateX = this.translateX + this.barWidth;
            } else {
                this.translateX = 0;
            }
        },
        handleNext(){
            const width = this.offsetWidth - this.barWidth + this.translateX;
            if(width > this.barWidth) {
                this.translateX = this.translateX - this.barWidth;
            } else {
                this.translateX = this.translateX - width;
            }
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
				<div ref="bar" class={getClassName('tab', 'bar')} onMouseenter={this.handleMouseenter} onMouseleave={this.handleMouseleave}>
					<div ref="list" class={getClassName('tab', 'bar', 'list')} style={this.listStyle}>
                        {tab}
                    </div>
                    <div class={getClassName('tab', 'prev')} v-show={this.prevShow} onClick={this.handlePrev}></div>
                    <div class={getClassName('tab', 'next')} v-show={this.nextShow} onClick={this.handleNext}></div>
				</div>
				{this.$slots.default}
			</div>
		);
	},
};
