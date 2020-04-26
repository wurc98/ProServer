'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  //登录
  async login(data) {
    const { ctx } = this;
    const res = await ctx.model.Users.find(data);
    if (res.length != 0) {
      if (res[0].passwd != data.passwd) {
        return { code: 0, msg: '密码错误' }
      }
      return { code: 1, msg: "登录成功", data: res[0] }
    } else {
      return { code: -1, msg: "登录失败,账号输入错误" }
    }
  }

  async reg(data) {
    const { ctx } = this;
    const obj = {};
    obj.account = data.account;
    const res = await ctx.model.Users.find(obj);
    if (res.length != 0) {
      return { code: 0, msg: "账号已存在" }
    }
    const res1 = await ctx.model.Users.create(data);
    if (res1.length != 0) {
      return {
        code: 1,
        msg: "注册成功"
      }
    }
    return {
      code: -1,
      msg: "注册失败"
    };
  }
  async userImg(data) {
    const { ctx } = this;
    const res = await ctx.model.Users.find(data);
    return res[0]
  }
  async addOrders(data) {
    const { ctx } = this;
    const res2 = await ctx.model.Orders.create(data);
    if (res2.length != 0) {
      return {
        code: 2,
        meg: "添加订单成功",
        res: res2
      }
    }
    return {
      code: -1,
      msg: '添加订单发生错误'
    }
  }
  async findOrders(data) {
    const { ctx } = this;
    const res = await ctx.model.Orders.find({ account: data.account });
    console.log('查询结果：' + res)
    if (res.length != 0) {
      return {
        code: 1,
        msg: '订单查询成功',
        res
      }
    }
    return {
      code: -1,
      msg: '订单查询失败',
      res
    }
  }

  async updateInfo(data) {
    const { ctx } = this;
    const res = await ctx.model.Users.findOneAndUpdate({ account: data.account }, { $set: data }).then(docs => {
      return { code: 1, mes: "修改成功", res: docs }
    }).catch(err => {
      return { code: 0, mes: "修改失败", res: err }
    });
    return res
  }
  async changePasswd(data) {
    const { ctx } = this;
    const res = await ctx.model.Users.findOneAndUpdate({ account: data.account }, { $set: {passwd:data.passwd} }).then(docs => {
      return { code: 1, mes: "修改成功"}
    }).catch(err => {
      return { code: 0, mes: "修改失败", res: err }
    });
    return res
  }
}

module.exports = UsersService;