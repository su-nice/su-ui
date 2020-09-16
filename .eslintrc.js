module.exports = {
	root: true,
	env: {
		node: true,
	},
	rules: {
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'no-debugger': 1,
		semi: [2, 'always'],
		'vue/no-use-v-if-with-v-for': [2, { allowUsingIterationVar: false }],
		'comma-dangle': 'off',
		'one-var': [
			'warn',
			{
				var: 'always',
				let: 'always',
				const: 'never',
			},
		],
		'no-throw-literal': 0,
		'no-new-wrappers': 2,
		'no-useless-escape': 0,
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 1,
		'space-before-function-paren': [0, 'always'],
		'no-unused-vars': 1,
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
			},
		},
	],
	parserOptions: {
		parser: 'babel-eslint',
	},

	extends: ['plugin:vue/essential'],
};
