'use strict';

const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async index() {
    const { ctx } = this;
    const res =await ctx.service.orders.submit();
    ctx.body = res;
  }
  async allOrders() {
    const { ctx } = this;
    const res =await ctx.service.orders.allOrders();
    ctx.body = res;
  }
  async updateOrders(){
    const { ctx } = this;
    const res =await ctx.service.orders.updateOrders(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = OrdersController;
