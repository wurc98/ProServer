'use strict';

const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async index() {
    const { ctx } = this;
    const res =await ctx.service.orders.submit();
    ctx.body = res;
  }
}

module.exports = OrdersController;
