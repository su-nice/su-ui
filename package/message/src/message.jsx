import { getClassName } from '../../utils/component/component';

export default {
	name: 'message',
	props: {
		message: {
            type: [String, Object],
        },
        type: {
            type: String,
            default: 'info',
        }
	},
	data() {
		return {
			visible: false,
		};
	},
	methods: {
		show() {
			this.visible = true;
		},
		hide() {
			this.visible = false;
		},
	},
	render() {
		if (!this.visible) {
			return null;
		}
		let className = [getClassName('message')],
            status = <i class={`icon-${this.type}`}></i>;
		return (
			<transition name="slide-up" appear>
				<div class={className}>
                    {status}
					<div class={getClassName('message', 'con')}>{this.message}</div>
				</div>
			</transition>
		);
	},
};
