'use strict';

/**
 * 创建单条或多条
 * @param {object} ctx 
 */
module.exports = async function (ctx) {

   const { request, model, fields } = ctx;
   const { body } = request;

   const data = {};

   for (const field in fields) {
      data[field] = body[field];
   }

   Object.assign(data, ctx.where);

   const result = await model.insert(data).catch(error => {
      return {
         code: 1000,
         error: error.message
      }
   })

   return ctx.body = result;

};