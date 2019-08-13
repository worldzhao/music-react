const { REACT_APP_ENV } = process.env;

const isDev = REACT_APP_ENV === 'dev';

module.exports = {
  presets: [['react-app', { flow: false, typescript: true }]],
  plugins: [
    [
      'import',
      {
        libraryName: 'dora-ui',
        libraryDirectory: 'es',
        style: 'css'
      }
    ],
    // 开发模式下不使用code splitting 加快热更新速度
    isDev && 'dynamic-import-node'
  ].filter(Boolean)
};
