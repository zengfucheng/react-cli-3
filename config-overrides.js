/**
 *
 * name: config-overrides
 * date: 2019-05-08
 * author: cengfucheng
 * about: 重写（自定义添加配置）
 *
 *
 */

const path = require('path');
const fs = require('fs');

const { override, fixBabelImports, addLessLoader, addWebpackAlias, addBabelPlugins, useBabelRc, addDecoratorsLegacy, disableEsLint} = require("customize-cra");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');     //gzip压缩

const resolve = (dir,...more) => {

    // ...Array.from(arguments)     // arguments方式
    let type = Object.prototype.toString.call(dir);
    let typeName = type.slice(8, type.length-1);
    if(typeName == 'Object') return path.resolve({...dir},...more);
    if(typeName == 'Array') return path.resolve([...dir],...more);
    if(typeName == 'String') return path.resolve(dir,...more);
    console.error('路径不合法');
    process.exit();

}


console.log(process.env.NODE_ENV,1111111111)

let aliasList = {
    '@': resolve('src'),
};

// process.env.GENERATE_SOURCEMAP = "false";


const addMyName = () => (config) => {
    // 自定义回调函数

    let plugins = [
        new CopyWebpackPlugin([         // 添加静态文件地址
            {
                from: resolve('static'),
                to: resolve('build', 'static'),
                type: 'dir',
                ignore: [
                    '.DS_Store'
                ]
            }
        ]),
        new CompressionWebpackPlugin({
            // asset: '[path].gz[query]',// 目标文件名
            algorithm: 'gzip',// 使用gzip压缩
            test: new RegExp(
                '\\.(js|css)$' // 压缩 js 与 css
            ),
            threshold: 10240,// 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
        })
    ]

    config.plugins = [...config.plugins,...plugins];

    // 输出配置到根目录 src下，供查看
    let writeFile = fs.createWriteStream('output.js');
    writeFile.write(JSON.stringify(config, null, 4),'utf8');

    return config;
}
module.exports = override(
    ...addBabelPlugins(
        // "polished",
        // "emotion",
        // "babel-plugin-transform-do-expressions",
        // "babel-plugin-import"
    ),
    fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css', // `style: true` 会加载 less 文件，就修改了 antd的less样式
            // style: true
        }
    ),
    addLessLoader({
        strictMath: true,
        noIeCompat: true,
        localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    }),
    addWebpackAlias({...aliasList}),
    // useBabelRc(),           //  使用装饰器, 这种需要配置 babel
                                // 配置 .babelrc 文件
                                //{
                                //   "presets": ["module:metro-react-native-babel-preset"],
                                //   "plugins": [
                                //     [
                                //       "@babel/plugin-proposal-decorators",
                                //       {
                                //         "legacy": true
                                //       }
                                //     ]
                                //   ]
                                // }
    addDecoratorsLegacy(),      //  使用装饰器， 这种不需要配置 babel  , 尤其 mobx 需要装饰器
    disableEsLint(),            //  禁止eslint，mobx 语法不规范，禁止有好处
    addMyName()
)



// 未使用 customize-cra 方式
// module.exports = {
//     webpack: (config) => {
//         // console.log(config,11111);
//         console.log(config.entry,1234)
//         // 修改进口配置
//         config.entry.forEach((v, i) =>
// const { override, fixBabelImports, addLessLoader, addWebpackAlias} = require("customize-cra"); {
//             console.log(v,i,1234)
//             // if(v.indexOf(main.js) != -1) {
//             //     config.entry[i] = resolve('src','main.js');
//             // }
//         })
//
//         // 增加别名配置
//         config.resolve.alias = {
//             ...config.resolve.alias,
//             ...aliasList
//         }
//
//         let writeFile = fs.createWriteStream('output.js');
//         writeFile.write(JSON.stringify(config, null, 4),'utf8');
//         return config;
//     }
// }