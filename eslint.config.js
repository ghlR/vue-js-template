import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		languageOptions: { globals: globals.browser },
	},
	pluginVue.configs['flat/essential'],
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		rules: {
			'vue/no-unused-vars': 'error', // 关闭 Vue 未使用变量检查

			// Common
			'semi': ['error', 'never'],
			'quotes': ['error', 'single'],
			'quote-props': ['error', 'consistent-as-needed'],
			'accessor-pairs': 'error',
			'arrow-spacing': ['error', { before: true, after: true }],
			'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
			'block-spacing': ['error', 'always'],
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'camelcase': ['off', { properties: 'always' }],
			'comma-dangle': ['error', 'always-multiline'],
			'comma-spacing': ['error', { before: false, after: true }],
			'comma-style': ['error', 'last'],
			'constructor-super': 'error',
			'curly': ['error', 'all'],
			'dot-location': ['error', 'property'],
			'eol-last': 'error',
			'generator-star-spacing': ['error', { before: true, after: true }],
			// 'indent': ['error', 1, { SwitchCase: 1 }],
			'semi-spacing': ['error', { before: false, after: true }],
			'key-spacing': ['error', { beforeColon: false, afterColon: true }],
			'keyword-spacing': ['error', { before: true, after: true }],
			'no-debugger': 'error',
			'no-console': [0, { allow: ['warn', 'error'] }],
			'no-constant-condition': 'warn',
			'no-cond-assign': ['error', 'always'],
			'func-call-spacing': ['off', 'never'],
			'no-restricted-syntax': [
				'error',
				'DebuggerStatement',
				'LabeledStatement',
				'WithStatement',
			],
			'space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always',
				},
			],
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'space-in-parens': ['error', 'never'],
			'space-infix-ops': 'error',
			'space-unary-ops': ['error', { words: true, nonwords: false }],
			'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],

			// ES6
			'no-var': 'error',
			'prefer-const': [
				'error',
				{
					destructuring: 'any',
					ignoreReadBeforeAssign: true,
				},
			],
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: false,
					allowUnboundThis: true,
				},
			],
			'object-shorthand': [
				'error',
				'always',
				{
					ignoreConstructors: false,
					avoidQuotes: true,
				},
			],
			'prefer-exponentiation-operator': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'template-curly-spacing': ['error', 'never'],

			// best-practice
			'array-callback-return': 'error',
			'block-scoped-var': 'error',
			'eqeqeq': ['error', 'smart'],
			'no-alert': 'warn',
			'no-case-declarations': 'error',
			'vars-on-top': 'error',
			'require-await': 'off',
			'operator-linebreak': ['error', 'before'],

			'sort-imports': [
				'error',
				{
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
					allowSeparatedGroups: false,
				},
			],
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			'vue/max-attributes-per-line': 'off',
			'vue/no-v-html': 'off',
			'vue/require-default-prop': 'off',
			'vue/require-prop-types': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/prefer-import-from-vue': 'off',

			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/component-options-name-casing': ['error', 'PascalCase'],
			'vue/custom-event-name-casing': ['error', 'camelCase'],
			'vue/define-macros-order': [
				'error',
				{
					order: ['defineProps', 'defineEmits'],
				},
			],

			'vue/html-button-has-type': [
				'error',
				{
					button: true,
					submit: true,
					reset: true,
				},
			],

			'vue/html-comment-content-spacing': [
				'error',
				'always',
				{
					exceptions: ['-'],
				},
			],
			'vue/no-restricted-v-bind': ['error', '/^v-/'],
			'vue/no-useless-v-bind': 'error',
			'vue/no-v-text-v-html-on-component': 'error',
			'vue/padding-line-between-blocks': ['error', 'always'],
			'vue/prefer-separate-static-class': 'error',

			// Extensions Rules
			'vue/array-bracket-spacing': ['error', 'never'],
			'vue/arrow-spacing': ['error', { before: true, after: true }],
			'vue/block-spacing': ['error', 'always'],
			'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'vue/comma-dangle': ['error', 'always-multiline'],
			'vue/comma-spacing': ['error', { before: false, after: true }],
			'vue/comma-style': ['error', 'last'],
			'vue/dot-location': ['error', 'property'],
			'vue/dot-notation': ['error', { allowKeywords: true }],
			'vue/eqeqeq': ['error', 'smart'],
			'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
			'vue/keyword-spacing': ['error', { before: true, after: true }],
			'vue/no-constant-condition': 'warn',
			'vue/no-empty-pattern': 'error',
			'vue/no-extra-parens': ['error', 'functions'],
			'vue/no-irregular-whitespace': 'error',
			'vue/no-loss-of-precision': 'error',
			'vue/no-restricted-syntax': [
				'error',
				'DebuggerStatement',
				'LabeledStatement',
				'WithStatement',
			],
			'vue/no-sparse-arrays': 'error',
			'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
			'vue/object-curly-spacing': ['error', 'always'],
			'vue/object-property-newline': [
				'error',
				{ allowMultiplePropertiesPerLine: true },
			],
			'vue/object-shorthand': [
				'error',
				'always',
				{
					ignoreConstructors: false,
					avoidQuotes: true,
				},
			],
			'vue/operator-linebreak': ['error', 'before'],
			'vue/prefer-template': 'error',
			'vue/quote-props': ['error', 'consistent-as-needed'],
			'vue/space-in-parens': ['error', 'never'],
			'vue/space-infix-ops': 'error',
			'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
			'vue/template-curly-spacing': 'error',
		},
	},
])
