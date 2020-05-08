'use strict';
const Service = require('egg').Service;


class OrdersService extends Service {
    async submit(data) {
        const { ctx } = this;
        const res1=await cts.model.Carts.remove({username:data.name})
        const res2=await ctx.model.Orders.create(data).then(docs=>{
            return {
                code:1,
                mes:"订单提交成功，祝您购物愉快~"
            }
        }).catch(err=>{
            return {
                code:-1,
                mes:"提交失败"
            }
        })
        return res2

    }
    async allOrders() {
        const { ctx } = this;
        const res = await ctx.model.Orders.find()
        return res
    }
    async updateOrders(data) {
        console.log(data)
        const { ctx } = this;
        const res = await ctx.model.Orders.findOneAndUpdate({ "_id": data._id }, { $set: data }).then(docs => {
        return { code: 1, mes: "修改成功"}
        }).catch(err => {
        return { code: 0, mes: "修改失败", res: err }
        });
        return res
    }
}

module.exports = OrdersService;