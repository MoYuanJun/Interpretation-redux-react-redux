// 导入添加babel插件的函数
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  // 修饰器扩展 (添加babel插件：transform-decorators-legacy ）
  config = injectBabelPlugin('transform-decorators-legacy', config)
  return config;
};