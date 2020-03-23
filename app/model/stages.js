'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    account: { type: String },
    username: { type: String },
    passwd: { type: String }
  });
  return mongoose.model('administrators', userSchema);
};
