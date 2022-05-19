module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    /** ******** 系统工程开发规范 */
    // 设置 console 和 debug 开关
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    /** ******** 导入导出规范规范 */
    // 允许引入时不加后缀
    'import/extensions': 'off',
    // 允许引入时通过 unresolved 索引
    'import/no-unresolved': 'off',
    // 允许引入时自定义位置
    'import/no-extraneous-dependencies': 'off',
    // 允许不使用default导出
    'import/prefer-default-export': 'off',

    /** ******** html书写规范 */
    // 允许属性堆积在同一行
    'vue/max-attributes-per-line': 'off',
    // 允许html标签子关闭
    'vue/html-self-closing': 'off',
    // 允许文本不出现在新的一行
    'vue/singleline-html-element-content-newline': 'off',

    /** ******** js书写规范 */
    // 允许不使用拖尾逗号
    'comma-dangle': 'off',
    // 允许使用一元运算符 ++\--
    'no-plusplus': 'off',
    // 使用默认十进制
    radix: 'off',
    // 允许花括号对象内不换行
    'object-curly-newline': 'off',
    // 允许箭头函数跨行
    'implicit-arrow-linebreak': 'off',
    // 允许换行符不保持一致
    'linebreak-style': 'off',

    /** ******** typescript规范 */
    // 允许使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
