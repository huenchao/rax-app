import * as TimeFixPlugin from 'time-fix-plugin';

export default (config) => {
  // set source map, https://webpack.js.org/configuration/devtool/#devtool
  config.devtool('cheap-module-source-map');
  // fix: https://github.com/webpack/watchpack/issues/25
  config.plugin('TimeFixPlugin').use(TimeFixPlugin);
};
