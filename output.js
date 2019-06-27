{
    "mode": "development",
    "bail": false,
    "devtool": "cheap-module-source-map",
    "entry": [
        "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/react-dev-utils/webpackHotDevClient.js",
        "/Users/cengfucheng/WebstormProjects/react/react-cli-3/src/index.js"
    ],
    "output": {
        "pathinfo": true,
        "filename": "static/js/bundle.js",
        "futureEmitAssets": true,
        "chunkFilename": "static/js/[name].chunk.js",
        "publicPath": "/"
    },
    "optimization": {
        "minimize": false,
        "minimizer": [
            {
                "options": {
                    "test": {},
                    "extractComments": false,
                    "sourceMap": true,
                    "cache": true,
                    "parallel": true,
                    "terserOptions": {
                        "output": {
                            "ecma": 5,
                            "comments": false,
                            "ascii_only": true
                        },
                        "parse": {
                            "ecma": 8
                        },
                        "compress": {
                            "ecma": 5,
                            "warnings": false,
                            "comparisons": false,
                            "inline": 2
                        },
                        "mangle": {
                            "safari10": true
                        }
                    }
                }
            },
            {
                "pluginDescriptor": {
                    "name": "OptimizeCssAssetsWebpackPlugin"
                },
                "options": {
                    "assetProcessors": [
                        {
                            "phase": "compilation.optimize-chunk-assets",
                            "regExp": {}
                        }
                    ],
                    "assetNameRegExp": {},
                    "cssProcessorOptions": {
                        "map": {
                            "inline": false,
                            "annotation": true
                        }
                    },
                    "cssProcessorPluginOptions": {}
                },
                "phaseAssetProcessors": {
                    "compilation.optimize-chunk-assets": [
                        {
                            "phase": "compilation.optimize-chunk-assets",
                            "regExp": {}
                        }
                    ],
                    "compilation.optimize-assets": [],
                    "emit": []
                },
                "deleteAssetsMap": {}
            }
        ],
        "splitChunks": {
            "chunks": "all",
            "name": false
        },
        "runtimeChunk": true
    },
    "resolve": {
        "modules": [
            "node_modules",
            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules"
        ],
        "extensions": [
            ".web.mjs",
            ".mjs",
            ".web.js",
            ".js",
            ".json",
            ".web.jsx",
            ".jsx"
        ],
        "alias": {
            "react-native": "react-native-web",
            "@": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/src"
        },
        "plugins": [
            {
                "topLevelLoader": {}
            },
            {
                "appSrcs": [
                    "/Users/cengfucheng/WebstormProjects/react/react-cli-3/src"
                ],
                "allowedFiles": {}
            }
        ]
    },
    "resolveLoader": {
        "plugins": [
            {}
        ]
    },
    "module": {
        "strictExportPresence": true,
        "rules": [
            {
                "parser": {
                    "requireEnsure": false
                }
            },
            {
                "oneOf": [
                    {
                        "test": [
                            {},
                            {},
                            {},
                            {}
                        ],
                        "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/url-loader/dist/cjs.js",
                        "options": {
                            "limit": 10000,
                            "name": "static/media/[name].[hash:8].[ext]"
                        }
                    },
                    {
                        "test": {},
                        "include": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/src",
                        "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/react-scripts/node_modules/babel-loader/lib/index.js",
                        "options": {
                            "customize": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/babel-preset-react-app/webpack-overrides.js",
                            "babelrc": false,
                            "configFile": false,
                            "presets": [
                                "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/babel-preset-react-app/index.js"
                            ],
                            "cacheIdentifier": "development:babel-plugin-named-asset-import@:babel-preset-react-app@8.0.0:react-dev-utils@9.0.0:react-scripts@3.0.0",
                            "plugins": [
                                [
                                    "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/react-scripts/node_modules/babel-plugin-named-asset-import/index.js",
                                    {
                                        "loaderMap": {
                                            "svg": {
                                                "ReactComponent": "@svgr/webpack?-svgo,+ref![path]"
                                            }
                                        }
                                    }
                                ],
                                [
                                    "import",
                                    {
                                        "libraryName": "antd",
                                        "libraryDirectory": "es",
                                        "style": "css"
                                    },
                                    "fix-import-imports"
                                ],
                                [
                                    "@babel/plugin-proposal-decorators",
                                    {
                                        "legacy": true
                                    }
                                ]
                            ],
                            "cacheDirectory": true,
                            "cacheCompression": false,
                            "compact": false
                        }
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/react-scripts/node_modules/babel-loader/lib/index.js",
                        "options": {
                            "babelrc": false,
                            "configFile": false,
                            "compact": false,
                            "presets": [
                                [
                                    "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/babel-preset-react-app/dependencies.js",
                                    {
                                        "helpers": true
                                    }
                                ]
                            ],
                            "cacheDirectory": true,
                            "cacheCompression": false,
                            "cacheIdentifier": "development:babel-plugin-named-asset-import@:babel-preset-react-app@8.0.0:react-dev-utils@9.0.0:react-scripts@3.0.0",
                            "sourceMaps": false
                        }
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "use": [
                            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/style-loader/index.js",
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 1,
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            }
                        ],
                        "sideEffects": true
                    },
                    {
                        "test": {},
                        "use": [
                            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/style-loader/index.js",
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 1,
                                    "sourceMap": false,
                                    "modules": true
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "use": [
                            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/style-loader/index.js",
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 2,
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/sass-loader/lib/loader.js",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ],
                        "sideEffects": true
                    },
                    {
                        "test": {},
                        "use": [
                            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/style-loader/index.js",
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 2,
                                    "sourceMap": false,
                                    "modules": true
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/sass-loader/lib/loader.js",
                                "options": {
                                    "sourceMap": false
                                }
                            }
                        ]
                    },
                    {
                        "test": {},
                        "exclude": {},
                        "use": [
                            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/style-loader/index.js",
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 2
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/less-loader/dist/cjs.js",
                                "options": {
                                    "strictMath": true,
                                    "noIeCompat": true,
                                    "localIdentName": "[local]--[hash:base64:5]",
                                    "source": false
                                }
                            }
                        ],
                        "sideEffects": false
                    },
                    {
                        "test": {},
                        "use": [
                            "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/style-loader/index.js",
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/css-loader/dist/cjs.js",
                                "options": {
                                    "importLoaders": 2,
                                    "modules": true,
                                    "localIdentName": "[local]--[hash:base64:5]"
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/postcss-loader/src/index.js",
                                "options": {
                                    "ident": "postcss",
                                    "sourceMap": false
                                }
                            },
                            {
                                "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/less-loader/dist/cjs.js",
                                "options": {
                                    "strictMath": true,
                                    "noIeCompat": true,
                                    "localIdentName": "[local]--[hash:base64:5]",
                                    "source": false
                                }
                            }
                        ]
                    },
                    {
                        "loader": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules/file-loader/dist/cjs.js",
                        "exclude": [
                            {},
                            {},
                            {}
                        ],
                        "options": {
                            "name": "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        {
            "options": {
                "template": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/public/index.html",
                "templateContent": false,
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "chunksSortMode": "auto",
                "meta": {},
                "title": "Webpack App",
                "xhtml": false
            },
            "version": 4
        },
        {
            "replacements": {
                "NODE_ENV": "development",
                "PUBLIC_URL": ""
            }
        },
        {
            "appPath": "/Users/cengfucheng/WebstormProjects/react/react-cli-3"
        },
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"development\"",
                    "PUBLIC_URL": "\"\""
                }
            }
        },
        {
            "options": {},
            "fullBuildTimeout": 200,
            "requestTimeout": 10000
        },
        {
            "options": {},
            "pathCache": {},
            "fsOperations": 0,
            "primed": false
        },
        {
            "nodeModulesPath": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/node_modules"
        },
        {
            "opts": {
                "publicPath": "/",
                "basePath": "",
                "fileName": "asset-manifest.json",
                "transformExtensions": {},
                "writeToFileEmit": false,
                "seed": null,
                "filter": null,
                "map": null,
                "sort": null
            }
        },
        {
            "options": {
                "resourceRegExp": {},
                "contextRegExp": {}
            }
        },
        {
            "patterns": [
                {
                    "from": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/static",
                    "to": "/Users/cengfucheng/WebstormProjects/react/react-cli-3/build/static",
                    "type": "dir",
                    "ignore": [
                        ".DS_Store"
                    ]
                }
            ],
            "options": {}
        },
        {
            "options": {
                "test": {},
                "cache": false,
                "compressionOptions": {
                    "level": 9
                },
                "filename": "[path].gz[query]",
                "threshold": 10240,
                "minRatio": 0.8,
                "deleteOriginalAssets": false
            }
        }
    ],
    "node": {
        "module": "empty",
        "dgram": "empty",
        "dns": "mock",
        "fs": "empty",
        "http2": "empty",
        "net": "empty",
        "tls": "empty",
        "child_process": "empty"
    },
    "performance": false
}