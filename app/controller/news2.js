const Controller = require('egg').Controller;

class News2Controller extends Controller {
  async list() {
    const ctx = this.ctx;
    const returnObj = await ctx.service.news2.list();
    await ctx.render('news2/list.tpl', returnObj);
  }
}

module.exports = News2Controller;
