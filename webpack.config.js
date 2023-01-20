const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 配置信息
module.exports = {
	mode: "development",
	// 指定入口文件
	entry: "./src/index.ts",
	// 指定打包文件目录
	output: {
		path: path.resolve(__dirname, "dist"),
		// 打包后文件名
		filename: "bundle.js",

		// 环境配置
		environment: {
			arrowFunction: false, // 禁止箭头函数
			const: false, // 禁止const关键字
		},
	},

	// 指定webpack打包时使用的模块
	module: {
		// 指定加载规则
		rules: [
			// 设置ts和js文件处理
			{
				test: /\.ts$/, // 生效文件后缀
				use: [
					{
						loader: "babel-loader",
						options: {
							// 设置预定义浏览器环境
							presets: [
								[
									// 指定环境插件
									"@babel/preset-env",
									{
										targets: {
											chrome: "58",
											ie: "11",
										},
										// 指定corejs版本
										corejs: "3",
										// 按需加载
										useBuiltIns: "usage",
									},
								],
							],
						},
					},
					"ts-loader",
				], // 使用的工具
				exclude: /node-modules/, // 排除项
			},
			// 设置less文件处理
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											browsers: "last 2 versions",
										},
									],
								],
							},
						},
					},
					"less-loader",
				],
			},
		],
	},

	// 配置webpack插件
	plugins: [
		new HTMLWebpackPlugin({
			// 配置模板html路径
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(),
	],

	// 设置引用模块
	resolve: {
		extensions: [".ts", ".js"],
	},
};
