'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  mongoose.set('useFindAndModify', false)
  const Schema = mongoose.Schema;
  const cartsSchema = new Schema({
    account:String,
    goods:Array
  });
  return mongoose.model('carts', cartsSchema);
};
