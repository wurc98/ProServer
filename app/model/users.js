'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    account: { type: String },
    username: { type: String },
    passwd: { type: String },
    headerImg: { type: String },
    date: { type: String },
    phone: { type:String },
    address: { type:String },
    label: { type:String },
  });
  return mongoose.model('users', userSchema);
};
