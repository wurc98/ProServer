'use strict';
const fs = require('fs');

const Controller = require('egg').Controller;
class BackStageController extends Controller {
  async login() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const res = await ctx.service.backStages.login(ctx.request.body);
    ctx.response.body = res;
  }
  async allUsers(){
    const { ctx } = this;
    //设置session
    console.log(ctx.request.body)
    const res = await ctx.service.backStages.allUsers(ctx.request.body);
    ctx.response.body=res
  }
  async  updateUser(){
    const { ctx } = this;
    console.log(ctx.request.body)
    const res = await ctx.service.backStages.updateUser(ctx.request.body);
    ctx.response.body = res;
  }
  async removeUser(){
    const { ctx } = this;
    console.log(ctx.request.body)
    const res = await ctx.service.backStages.removeUser(ctx.request.body);
    ctx.response.body = res;
  }
  async allBooks(){
    const {ctx } =this;
    const res = await ctx.service.backStages.allBooks(ctx.request.body)
    ctx.response.body =res
  }
  async removeBook(){
    const {ctx } =this;
    const res = await ctx.service.backStages.removeBook(ctx.request.body)
    ctx.response.body =res
  }
  async addBooks(){
    const {ctx } =this;
    const res = await ctx.service.backStages.addBooks(ctx.request.body)
    ctx.response.body =res
  }
  async bookImg(){
    const {ctx } =this;
    const res = await ctx.service.backStages.bookImg(ctx.request.body)
    ctx.response.body =res
  }
  async removeOrder(){
    const {ctx } =this;
    const res = await ctx.service.backStages.removeOrder(ctx.request.body)
    ctx.response.body =res
  }
}

module.exports = BackStageController;
