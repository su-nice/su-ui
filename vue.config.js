const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}
const theme = require(resolve('./build/color.js'));

module.exports = {
	productionSourceMap: false,

	indexPath: '../index.html',
	publicPath: isDev ? undefined : `./static`,
	outputDir: `dist/static`,
	css: {
		loaderOptions: {
			less: {
				modifyVars: theme,
				javascriptEnabled: true,
			},
		},
	},
	chainWebpack: config => {
		config.resolve.alias.set('package', resolve('./package'));
	},
};
