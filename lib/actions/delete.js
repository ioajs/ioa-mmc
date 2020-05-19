'use strict';

const { parser } = require('@app');

/**
 * 删除单条或多条
 * @param {object} ctx 
 */
module.exports = async function (ctx) {

   const { model } = ctx;

   const instance = model.delete();

   ctx.instance = instance;

   parser.where(ctx);

   return await instance.catch(error => {
      return {
         code: 1000,
         error: error.message
      }
   })

}
