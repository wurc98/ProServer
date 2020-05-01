'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const productsSchema = new Schema({
    name:{
      type:String
    },
    img:{
      type:String
    },
    info:{type:String},
    price:{
      type:String
    },
    seckill:Number,
    commentNum:{
      type:Number,
      default:0
    },
    pubtime:String,
    language:String,
    press:{
      type:String
    },
    author:{
      type:String
    },
    classify:{
      type:String
    },
    data:{
      type:Date,
      default:Date.now
    }
  });
  return mongoose.model('products', productsSchema);
};
