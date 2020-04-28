'use strict';
const Service = require('egg').Service;


class OrdersService extends Service {
    async submit(data) {
        const { ctx } = this;
        const res1=cts.model.Orders.find({username:data.name})
        if(res1.length!=0){
            const res2=ctx.model.Orders.update()
        }else{
            const res2=ctx.model.Orders.create()
        }
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