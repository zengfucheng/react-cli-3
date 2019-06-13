/**
 *
 * name: setting
 * date: 2019-05-31
 * author: cengfucheng
 * about: 基本设置
 *
 */

const fs = require('fs');
const path = require('path');
const router = require('koa-router')();

module.exports = router;


function readDir(path) {
    return new Promise( (resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(files);
            // files.forEach(( item, index ) => {
            //     fs.stat(filePath+'/'+item, (err, item))
            //     // console.log(filePath+'/'+item,'文件类型')
            //     console.log(item,fs.stat(filePath+'/'+item).isDirectory(),'文件类型')
            // });
        });
    });
}

function readJson(filePath) {
    return new Promise( (resolve, reject) => {
        fs.readFile(path.resolve(__dirname, filePath), (err, file) => {
            if(err) {
                reject(err);
                console.log(err);
                return;
            }
            if(file) {
                // console.log(JSON.parse(file));
                resolve(file);
                return;
            }

        });
    })
}

router.post('/advertise', async (ctx, next) => {

    // 读取图片
    // let filePath = path.resolve('./static/images/advertise/');
    // let files = await readDir(filePath);
    // console.log(files,'文件列表')

    let data = await readJson('../config/adertise.json');
    data = JSON.stringify(JSON.parse(data)).replace(/\//g,'|');
    ctx.status = 200;
    ctx.response.body = data;

    // ctx.status = 204;.

    next();
})