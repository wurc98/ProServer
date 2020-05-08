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
      likename: [],
      dislikename: [],
      reply: []
    }
    const res = await ctx.model.Comments.create(commentInfo).then(( docs)=> {
      console.log("命令触发")
      console.log("修改成功")
      console.log(docs)
      return  {code:1,mes:"提交成功"}
    }).catch(err=>{
      console.log(err)
      return {code:0,mes:"提交失败"}
    })
    const res1 = await ctx.model.Comments.find({name:data.name})
    await ctx.model.Products.updateOne({name:data.name},{$set:{commentNum:res1.length}})
    return res
  }
  //获取评论信息
  async getComment(data) {
    const { ctx } = this;
    console.log("测试获取评论")
    const res = await ctx.model.Comments.find(data).then(docs=>{
      return {code:1,mes:docs}
    }).catch(err=>{
      return {code:0,mes:err}
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
  async rank(data) {
    const { ctx } = this;
    const res = await ctx.model.Products.find(data).then(docs=>{
      return docs
    })
    function compare(property){
      return function(a,b){
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;
        }
    }
    let rank = res.sort(compare('commentNum')).slice(0,10)
    return {
      code:1,
      mes:"排序成功",
      data:rank
    }
  }
  //特价
  async addSpecial(data) {
    const { ctx } = this;
    let newData=[]
    // console.log(data)
    for(let i=0;i<data.length;i++){
    //  console.log(data[i])
      const r = await ctx.model.Specials.find({"_id":data[i]._id})
      // console.log(r)
      if(r.length==0){
        newData.push(data[i])
      }
    }
    const res = await ctx.model.Specials.create(newData).then(docs=>{
  		return {
  		  code:1,
  		  mes:"特价图书添加成功",
  		  data:docs
  		}
  	}).catch(err=>{
  		return {
  		  code:0,
  		  mes:"特价图书添加失败",
  		  data:err
  		}
  	})
    return res
  }
  async removeSpecial(data) {
    const { ctx } = this;
    const res = await ctx.model.Specials.remove(data).then(docs=>{
  		return {
  		  code:1,
  		  mes:"特价图书删除成功",
  		  data:docs
  		}
  	}).catch(err=>{
  		return {
  		  code:0,
  		  mes:"特价图书删除失败",
  		  data:err
  		}
  	})
    return res
  }
  async special(data) {
    const { ctx } = this;
    const res = await ctx.model.Specials.find(data).then(docs=>{
		return {
		  code:1,
		  mes:"特价图书查询成功",
		  data:docs
		}
	}).catch(err=>{
		return {
		  code:0,
		  mes:"特价图书查询失败",
		  data:err
		}
	})
    return res
  }
  async pricingSec(data) {
    const { ctx } = this;
    const res = await ctx.model.Specials.update({"_id":data._id},{$set:{seckill:data.seckill}}).then(docs=>{
		return {
		  code:1,
		  mes:"定价成功",
		  data:docs
		}
	}).catch(err=>{
		return {
		  code:0,
		  mes:"定价失败",
		  data:err
		}
	})
    return res
  }
  //畅销
  async addBooms(data) {
    const { ctx } = this;
    const res = await ctx.model.Booms.create(data).then(docs=>{
  		return {
  		  code:1,
  		  mes:"畅销图书添加成功",
  		  data:docs
  		}
  	}).catch(err=>{
  		return {
  		  code:0,
  		  mes:"畅销图书添加失败",
  		  data:err
  		}
  	})
    return res
  }
  async booms(data) {
    const { ctx } = this;
    const res = await ctx.model.Booms.find(data).then(docs=>{
  		return {
  		  code:1,
  		  mes:"畅销图书查询成功",
  		  data:docs
  		}
  	}).catch(err=>{
  		return {
  		  code:0,
  		  mes:"畅销图书查询失败",
  		  data:err
  		}
  	})
    return res
  }
  async removeBooms(data){
    const { ctx } = this;
    const res = await ctx.model.Booms.remove(data).then(docs=>{
  		return {
  		  code:1,
  		  mes:"畅销图书删除成功",
  		  data:docs
  		}
  	}).catch(err=>{
  		return {
  		  code:0,
  		  mes:"畅销图书删除失败",
  		  data:err
  		}
  	})
    return res
  }
}

module.exports = ProductsService;