/**
 *
 * name: server
 * date: 2019-05-31
 * author: cengfucheng
 * about:
 *
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const KoaLogger = require('koa-logger');
const KoaViews = require('koa-views');
const KoaStatic = require('koa-static');
const KoaCors = require('koa2-cors');
const BodyParser = require('koa-bodyparser');
const KoaCompress = require('koa-compress');        // gzip压缩

// const ws = require('nodejs-websocket');

const router = require('./server-route');

const app = new Koa();

// 白名单域名
const whiteList = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:8020',
    'http://localhost:3002',
    'http://localhost:8080',
    'http://localhost:8081',
];


const compressOption = {threshold: 2048};
// app.use(KoaCompress(compressOption));

app.use(KoaCors({
    // 通过中间件提供的方法，遍历白名单的函数，然后是否允许跨域访问
    options (ctx) {
        if(whiteList.includes(ctx.request.header.origin)){
            return ctx.request.header.origin;
        }
        // return '*';
    },
    origin(ctx) {
        // 只允许白名单域名访问本域～～
        if(whiteList.includes(ctx.request.header.origin)){
            return ctx.request.header.origin;
        }
        // return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,              // 是否携带cookie
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],         // 请求类型
    // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],      // 请求头

}));

app.use(KoaLogger());                   //日志
app.use(KoaViews(path.resolve('view'),{ //渲染引擎
    extension: 'ejs'
}));

app.use(BodyParser());          // 处理post body
app.use(KoaStatic(path.resolve(__dirname,'web'))); //静态文件夹，整个前端项目都设置为静态吧，方便～
app.use(KoaStatic(path.resolve(__dirname,'static'))); //静态文件夹，整个前端项目都设置为静态吧，方便～

app.use(router.routes());
app.use(router.allowedMethods());

//socket demo
// let socketServer = ws.createServer( (connect) => {
//     connect.on('text', (type) => {
//         console.log('接收到的type: ',type);
//     });
//
//     connect.on('close', (code, res) => {
//         console.log(code, res);
//     });
//
//     connect.on('error', (code, res) => {
//         console.log(code, res);
//     });
// }).listen(3003);


http.createServer(app.callback(
    console.log('http Server running at http://127.0.0.1:3000/')
)).listen(3000);
https.createServer(app.callback(
    console.log('https Server running at https://127.0.0.1:3001/')
)).listen(3001);
// var options = {
//     key: fs.readFileSync('./ssl/default.key'),
//     cert: fs.readFileSync('./ssl/default.cer')
// };
//
// var server = https.createServer(options, function (request, response) {
//     // ...
// });
