'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  mongoose.set('useFindAndModify', false)
  const Schema = mongoose.Schema;
  const ordersSchema = new Schema({
    account:String,
    name:{
      type:String,
      required:true
    },
    key:{
      type:String,
      index:true
    },
    num:{
      type:Number,
      default:1
    },
    logistics:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    date:{
      type:Date,
      default:Date.now
    }
  });
  return mongoose.model('orders', ordersSchema);
};
