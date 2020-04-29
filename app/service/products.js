'use strict';
const Service = require('egg').Service;


class ProductsService extends Service {
  async bookInfo(data) {
    const { ctx } = this;
    const res = await ctx.model.Products.find(data);
    return res[0]
  }
  async comment(data) {
    const { ctx } = this;
    const commentInfo = {
      ...data,
      like: 0,
      dislike: 0,
      likename: [],
      dislikename: [],
      reply: []
    }
    const res = await ctx.model.Products.updateOne({ name: data.name }, { $push: { comment: commentInfo } }).then( ( docs)=> {
      console.log("命令触发")
      console.log("修改成功")
      return  {code:1,mes:"提交成功"}
    }).catch(err=>{
      console.log(err)
      return {code:0,mes:"提交失败"}
    })
    return res
  }
  async joinCarts(data) {
    const { ctx } = this;
    console.log(data)
    const res = await ctx.model.Carts.find({account:data.account})
    console.log(res)
    if(res.length!=0){
       const res1 = await ctx.model.Carts.updateOne({account:data.account},{$push:{goods:{name:data.name,price:data.price}}}).then(docs=>{
          return {code:1,mes:"购物车添加商品成功",res:docs}
       }).catch(err=>{
         return {code:0,mes:"购物车添加商品失败",res:docs}
       })
      return res1
    }else{
      const res2 = await ctx.model.Carts.create({account:data.account,goods:[{name:data.name,price:data.price,num:1}]}).then(docs=>{
        return {code:1,mes:"购物车第一次添加商品成功",res:docs}
      }).catch(err=>{
        return {code:0,mes:"购物车添加商品失败",res:err}
      })
      return res2
    }
    // const res = await ctx.model.Carts.create(goodInfo).then(docs=>{
    //   return {code:1,mes:docs}
    // }).catch(err=>{
    //   return {code:0,mes:err}
    // });
  }
  async getCarts(data) {
    const { ctx } = this;
    console.log(data)
    const res = await ctx.model.Carts.find({username:data.username})
    return res[0];
    // const res = await ctx.model.Carts.create(goodInfo).then(docs=>{
    //   return {code:1,mes:docs}
    // }).catch(err=>{
    //   return {code:0,mes:err}
    // });
  }
  async rank() {
    const { ctx } = this;
    const res = await ctx.model.Products.find()
    function compare(property){
      return function(a,b){
          var value1 = a[property].length;
          var value2 = b[property].length;
          return value2 - value1;
        }
    }
    return {
      code:1,
      mes:"排序成功",
      data:res.sort(compare('comment'))
    }
  }
  
}

module.exports = ProductsService;