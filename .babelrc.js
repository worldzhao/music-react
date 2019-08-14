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
    ]
  ],
  env: {
    development: {
      // 开发模式下不使用code splitting 加快热更新速度
      plugins: ['dynamic-import-node']
    },
    production: {}
  }
};
