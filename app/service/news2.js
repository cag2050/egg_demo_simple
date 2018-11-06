const Service = require('egg').Service;

class News2Service extends Service {
  async list() {
    const { serverUrl } = this.config.news2;
    const result = await this.ctx.curl(`${serverUrl}`, { dataType: 'json' });
    return result.data;
  }
}

module.exports = News2Service;
