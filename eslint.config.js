import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: [
            '**/dist/**',
            '**/dist-ssr/**',
            '**/coverage/**',
            '**/build/**',
            '**/config/**',
            '**/dist/**',
            '/*.js',
            'vitest.config.js',
            '.eslintignore',
        ],
    },

    {
        name: 'app/language-options',
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],

    {
        name: 'app/vue-rules',
        rules: {
            'vue/multi-word-component-names': 'off',
        },
    },

    {
        ...pluginVitest.configs.recommended,
        files: ['src/**/__tests__/*'],
    },
    skipFormatting,
]
