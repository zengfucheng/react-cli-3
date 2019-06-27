/**
 *
 * name: util
 * date: 2019-06-15
 * author: cengfucheng
 * about: 基本工具类
 *
 */

export const ScrollTop = () => {
    return  Math.round(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
};