import { getClassName } from '../../utils/component/component';

export default {
    name: 'ellipsis',
    data(){
        return {
            isMoving: false,
        };
    },
    methods: {
        handleMouseenter(event){
            this.isMoving = true;
            const target = event.target;
            target.parentElement.style.setProperty('--target-width', target.clientWidth);
        },
        handleMouseleave() {
            this.isMoving = false;
        }
    },
	render() {
        let className = [getClassName('ellipsis')];
        if(this.isMoving) {
            className.push(getClassName('ellipsis', 'moving'));
        }
		return <div class={className} onMouseenter={this.handleMouseenter} onMouseleave={this.handleMouseleave}>
            <div class={getClassName('ellipsis', 'content')}>{this.$slots.default}</div>
        </div>;
	},
};
