export default {
	props: {
		value: {
			type: Array,
		},
		valueKey: {
			type: String,
		},
	},
	render() {
		return (
			<div>
				{this.value.map(item => {
					return <span>{item}</span>;
				})}
			</div>
		);
	},
};
