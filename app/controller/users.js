'use strict';
const fs = require('fs');

const Controller = require('egg').Controller;
class UsersController extends Controller {
  async login() {
    const { ctx } = this;
    //设置session
    const res = await ctx.service.users.login(ctx.request.body);
    ctx.session.user = res;
    ctx.response.body = res;
  }
  async reg() {
    const { ctx } = this;
    const res = await ctx.service.users.reg(ctx.query)
    ctx.response.body = res;
  }
  async userImg() {
    const { ctx } = this;
    //设置session
    console.log(ctx.request.body)
    const res = await ctx.service.users.userImg(ctx.request.body);
    console.log(res.headerImg == undefined, res)
    if (res.headerImg == undefined) {
      const filePath = `app/public/comfiles/headImg.jpg`
      ctx.attachment(filePath)
      ctx.set("Content-type", 'image/jpg;image/png')
      ctx.response.body = fs.createReadStream(filePath)
    } else {
      const filePath = `app/public/comfiles/${res.headerImg}`
      ctx.attachment(filePath)
      ctx.set("Content-type", 'image/jpg;image/png')
      ctx.response.body = fs.createReadStream(filePath)
    }
  }
  //提交订单
  async addOrders() {
    const { ctx } = this;
    const res = await ctx.service.users.addOrders(ctx.request.body)
    ctx.response.body = res
  }
  async findOrders() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const res = await ctx.service.users.findOrders(ctx.request.body)
    ctx.response.body = res
  }

  //修改个人信息
  async updateInfo() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const res = await ctx.service.users.updateInfo(ctx.request.body)
    ctx.response.body = res
  }
  async changePasswd() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const res = await ctx.service.users.changePasswd(ctx.request.body)
    ctx.response.body = res
  }
  

}

module.exports = UsersController;
