// 'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 使用 this.ctx.body = xxx 直接设置body值
  router.get('/', controller.home.index);
  // 使用本地数据设置模板
  router.get('/news', controller.news.list);
  // 发起get请求，使用返回数据设置模板
  router.get('/news2', controller.news2.list);
};
