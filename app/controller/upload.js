'use strict';
const Controller = require('egg').Controller;

class UploadController extends Controller {
  async userImg() {
    const { ctx } = this;
    const res = await ctx.service.upload.userImg();
    ctx.response.body=res
  }
  async bookImg() {
    const { ctx } = this;
    const res = await ctx.service.upload.bookImg();
    ctx.response.body=res
  }
}

module.exports = UploadController;
