module.exports={
    // 输入
    entry: {
        background: './src/background.js',
        newtab: './src/newtab.js'
    },
    // 输出
    output: {
        path: '',
        filename: '[name].js'
    },
    // loader   处理js/jsx babel-loader   处理css/scss sass-loader  css-loader sytle-loader  处理图片 file-loader
    module:  {
        rules: [
            {
                // 处理js/jsx babel-loader
                test: /\.(js|jsx)$/
            },
            {
                // 处理css/scss sass-loader
                test: /\.(css|scss)$/
            },
            {
                // 处理图片
                test: /\.(jpg|png)$/
            }
        ]
    },
    // plugins
    plugins: [

    ]
}
