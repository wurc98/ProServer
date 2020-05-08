'use strict';
const Service = require('egg').Service;


class CartsService extends Service {
    async getCarts(data) {
        const { ctx } = this;
        console.log(data)
        const res = await ctx.model.Carts.find({ account: data.account })
        return res[0];
        // const res = await ctx.model.Carts.create(goodInfo).then(docs=>{
        //   return {code:1,mes:docs}
        // }).catch(err=>{
        //   return {code:0,mes:err}
        // });
    }
    async updateNum(data) {
        const { ctx } = this;
        console.log(data)
        const res = await ctx.model.Carts.findOneAndUpdate({ account: data.account,'goods.name':data.name},{$set:{'goods.$.num':data.num,'goods.$.info':data.info}})
        return res
    }
    async removeCart(data) {
        const { ctx } = this;
        console.log(data)
        const res = await ctx.model.Carts.update({ account: data.account},{$pull:{"goods":{"name":data.name}}})
        return res
    }
}

module.exports = CartsService;