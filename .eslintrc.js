// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here  
    rules: {
        'eqeqeq': 'off', // 使用 === 替代 ==
        'no-return-assign':'off',
        'one-var':'off',
        'no-useless-escape':'off',
        'no-tabs':'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'always'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'prod'||process.env.NODE_ENV === 'test' ? 'error' : 'off',
        // allow debugger during development
        'no-console': process.env.NODE_ENV === 'prod'||process.env.NODE_ENV === 'test' ? 'error' : 'off',
    }
  }
  