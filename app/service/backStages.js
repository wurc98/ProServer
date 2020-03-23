'use strict';

const Service = require('egg').Service;

class BackStrageService extends Service {
  //登录
  async login(data) {
    const { ctx } = this;
    console.log(data.account)
    const res = await ctx.model.Stages.find({account:data.account});
    console.log(res)

    if(res.length != 0){
      if(res[0].passwd != data.passwd ){
        return {code:0,msg:'密码错误'}
      }
      return {code:1,msg:"登录成功",data:res[0]}
    }else{
      return {code:-1,msg:"登录失败,账号输入错误"}
    }
  }
  //查询所有用户
  async allUsers(data){
    const {ctx} = this;
    const res=await ctx.model.Users.find(data)
    return {
        code:1,
        msg:'查询成功',
        data:res
      }
  }

  async updateUser(data){
    const { ctx } = this;
    console.log(data) 
    // const res = await ctx.model.Users.update();
  }
  async removeUser(data){
    const { ctx } = this;
    console.log(data) 
    const res = await ctx.model.Users.remove(data);
    return res
  }
  async allBooks(data){
    const { ctx } = this;
    const res = await ctx.model.Products.find(data);
    return res
  }
  async removeBook(data){
    const { ctx } = this;
    const res = await ctx.model.Products.remove(data);
    return res
  }
  
  async addBooks(data){
    const { ctx } = this;
    console.log(data)
    //分类添加
    // if(){

    // }
    const res = await ctx.model.Products.create(data);
    return res
  }
  async bookImg(data){
    const { ctx } = this;
    console.log(data)
    const res = await ctx.model.Products.find(data);
    return res[0]
  }
  async removeOrder(data){
    const { ctx } = this;
    console.log(data)
    const res = await ctx.model.Orders.remove(data);
    if(res.ok>0){
      return {
        code:1,
        msg:'删除成功',
        res
      }
    }
    return {
      code:-1,
      msg:'删除错误',
      res
    }
  }
}

module.exports = BackStrageService;