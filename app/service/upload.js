'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');


class UploadService extends Service {
  async userImg() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    const fileName = stream.filename;
    console.log(stream.fields,fileName)
    const res = await ctx.model.Users.updateOne({account:stream.fields.account},{$set:{headerImg:fileName}},function (err,rawResponse){
      if(!err){
        console.log("修改成功")
        return rawResponse
      }
    });
    // const res = await ctx.model.Users.find(stream.fields)
    let target  = path.join(this.config.baseDir, `app/public/comfiles/${stream.filename}`);
    const result = await new Promise((resolve, reject) => {
        const remoteFileStream = fs.createWriteStream(target);
        stream.pipe(remoteFileStream);
        let errFlag;
        remoteFileStream.on('error', err => {
            errFlag = true;
            sendToWormhole(stream);
            remoteFileStream.destroy();
            reject(err);
        });
        remoteFileStream.on('finish', async () => {
            if (errFlag) return;
            resolve({ fileName, name: stream.fields.username });
        });
      });
    return result;  
  }
  async bookImg() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    const fileName = stream.filename;
    console.log(stream.fields,fileName)
    const res = await ctx.model.Products.updateOne({name:stream.fields.name},{$set:{img:fileName}},function (err,rawResponse){
      if(!err){
        console.log("修改成功")
        return rawResponse
      }
    });
    // const res = await ctx.model.Users.find(stream.fields)
    console.log(res)
    let target  = path.join(this.config.baseDir, `app/public/products/${stream.filename}`);
    const result = await new Promise((resolve, reject) => {
        const remoteFileStream = fs.createWriteStream(target);
        stream.pipe(remoteFileStream);
        let errFlag;
        remoteFileStream.on('error', err => {
            errFlag = true;
            sendToWormhole(stream);
            remoteFileStream.destroy();
            reject(err);
        });
        remoteFileStream.on('finish', async () => {
            if (errFlag) return;
            resolve({ fileName, name: stream.fields.username });
        });
      });
    return result;  
  }
}

module.exports = UploadService;