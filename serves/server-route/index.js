/**
 *
 * name: index
 * date: 2019/2/1
 * author: cengfucheng
 * about: 路由
 *
 */
const router = require('koa-router')();

const home = require('./home');
const setting = require('./setting');

router.use('/', home.routes(), home.allowedMethods());
router.use('/setting', setting.routes(), setting.allowedMethods());

module.exports = router;
