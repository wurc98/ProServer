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
  async getComment(){
    const {ctx}=this;
    const res = await ctx.service.products.getComment(ctx.request.body)
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
  async special(){
    const { ctx } = this;
    const res = await ctx.service.products.special(ctx.request.body)
    ctx.response.body = res;
  }
  async pricingSec(){
    const { ctx } = this;
    const res = await ctx.service.products.pricingSec(ctx.request.body)
    ctx.response.body = res;
  }
  async addSpecial(){
    const { ctx } = this;
    const res = await ctx.service.products.addSpecial(ctx.request.body)
    ctx.response.body = res;
  }
  async removeSpecial(){
    const { ctx } = this;
    const res = await ctx.service.products.removeSpecial(ctx.request.body)
    ctx.response.body = res;
  }
  async boom(){
    const { ctx } = this;
    const res = await ctx.service.products.boom(ctx.request.body)
    ctx.response.body = res;
  }
  async addBoom(){
    const { ctx } = this;
    const res = await ctx.service.products.addBoom(ctx.request.body)
    ctx.response.body = res;
  }
  
  
}

module.exports = ProductsController;
