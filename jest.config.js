/**
 *
 * name: jest.config
 * date: 2019-07-24
 * author: cengfucheng
 * about:
 *
 */
// const path = require('path');
module.exports = {
    // rootDir: path.join(__dirname, 'src'),
    transform: {
    //     "^.+\\.tsx?$": "ts-jest",
    //     "^.+\\.vue$": "vue-jest",
        ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
            "jest-transform-stub",
        "^.+\\.jsx?$": "babel-jest"
    },
    testURL: "http://localhost/",
    testEnvironment: 'jsdom', // 测试环境
    // testMatch: ['<rootDir>/__jest__/\**\**/\*.js'],
    // testMatch: [
    //     "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    // ],
    testRegex: "\\.(test|spec)\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],     // 待测试文件后缀名
    moduleDirectories: ["node_modules"],
    transformIgnorePatterns: ["/node_modules/"],// 不转化es6的文件夹匹配
    moduleNameMapper: {             // mock模块
        // "^@/(.*)$": "<rootDir>/src/$1",
        "@/(.*)$": "<rootDir>/src/$1",
        "Restful/(.*)$": "<rootDir>/src/constants/restful/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__jest__/__mocks__/file.mock.js",     // mock文件
        "\\.(css|less)$": "<rootDir>/__jest__/__mocks__/css.mock.js", // mock css
    },
    // snapshotSerializers: ["jest-serializer-vue"],

    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ],

    setupFiles: ['<rootDir>/__jest__/jest.setup.js'],            // 测试文件启动项（公共部分）
};

// package.json 配置
// ,
// "jest": {
//     "moduleDirectories": ["node_modules"],
//         "moduleNameMapper": {
//         "^@/(.*)$": "<rootDir>/src/$1"
//     },
//     "resolver": null
// }

// babelrc 配置
// {
//     "presets": [
//     ["env", {"modules": false }],
//     "react",
//     "stage-2"
// ],
//     "env": {
//     "test": {
//         "presets": [["env"], "react", "stage-2"]
//     }
// },
//     "plugins": [
//     ["@babel/plugin-proposal-decorators", {"legacy": true}]
// ]
// }