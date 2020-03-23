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
}

module.exports = OrdersService;