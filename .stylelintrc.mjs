/** @type {import('stylelint').Config} */
export default {
	extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
	plugins: ['stylelint-less'],
	overrides: [
		{
			files: ['**/*.less'],
			customSyntax: 'postcss-less',
		},
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {},
}
