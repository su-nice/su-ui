import { getClassName } from "../../utils/component/component";
import Button from '../../button/index';
export default {
    compontents: {
        Button
    },
	props: {
		step: {
			type: Number,
			default: 0,
        },
        length: {
			type: Number,
			default: 0,
        }
    },
    methods: {
        prev(){
            this.$emit('changeStep', this.step - 1);
        },
        next(){
            this.$emit('changeStep', this.step + 1);
        },
        complete(){
            this.$emit('complete');
        }
    },
	render() {
		return (
			<div class={getClassName('guide', 'ctrl')}>
				{this.step > 0 ? <Button onClick={this.prev}>上一步</Button> : ''}
				{this.step < this.length - 1 ? <Button type="primary" onClick={this.next}>下一步</Button> : ''}
				{this.step === this.length - 1 ? <Button type="primary" onClick={this.complete}>完成</Button> : ''}
			</div>
		);
	},
};
