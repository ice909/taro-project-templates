// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro',
      {
        framework: '{{ to_lower_case framework }}',
        ts: '{{ typescript }}',
        compiler: '{{ to_lower_case compiler }}',
      }]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-react-taro",
        "libraryDirectory": "dist/esm",
        "style": 'css',
        "camel2DashComponentName": false
      },
      'nutui-react-taro'
    ]
  ]
}
