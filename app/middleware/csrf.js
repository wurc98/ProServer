'use strict'

module.exports = ()=>{
    return async function(ctx,next){
        console.log(222222222222)
        // console.log(ctx.)
        await next();
    }
}