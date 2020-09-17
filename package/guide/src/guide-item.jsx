import { getClassName } from "../../utils/component/component";

export default {
	props: {
		data: {
            type: Object,
            default(){
                return {
                    title: null,
                    content: null,
                    render: null,
                };
            }
		},
	},
	render() {
		if (this.data.render) {
			return <div class={getClassName('guide', 'item')}>{this.data.render}</div>;
		} else {
			return (
				<div class={getClassName('guide', 'item')}>
					<h4>{this.data.title}</h4>
					<div>{this.data.content}</div>
				</div>
			);
		}
	},
};
