'use strict';

const Controller = require('egg').Controller;
class ProductsController extends Controller {
  async bookInfo() {
    const { ctx } = this;
    //设置session
    const res = await ctx.service.products.bookInfo(ctx.request.body);
    ctx.response.body = res;
  }
  async comment(){
    const {ctx}=this;
    const res = await ctx.service.products.comment(ctx.request.body)
    ctx.response.body = res;
  }
  async commentLike(){
    const { ctx } = this;
    const res = await ctx.service.products.commentLike(ctx.request.body)
    ctx.response.body = res;
  }
  async joinCarts(){
    const { ctx } = this;
    const res = await ctx.service.products.joinCarts(ctx.request.body)
    ctx.response.body = res;
  }
  async getCarts(){
    const { ctx } = this;
    const res = await ctx.service.products.getCarts(ctx.request.body)
    ctx.response.body = res;
  }
  async rank(){
    const { ctx } = this;
    const res = await ctx.service.products.rank(ctx.request.body)
    ctx.response.body = res;
  }
  
}

module.exports = ProductsController;
