'use strict';

const Controller = require('egg').Controller;
class CartsController extends Controller {
  async getCarts(){
    const { ctx } = this;
    const res = await ctx.service.carts.getCarts(ctx.request.body)
    ctx.response.body = res;
  }
  async updateNum(){
    const { ctx } = this;
    const res = await ctx.service.carts.updateNum(ctx.request.body)
    ctx.response.body = res;
  }
  async removeCart(){
    const { ctx } = this;
    const res = await ctx.service.carts.removeCart(ctx.request.body)
    ctx.response.body = res;
  }
}

module.exports = CartsController;
