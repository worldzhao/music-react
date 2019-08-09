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
  ]
};
