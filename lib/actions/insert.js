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

   return await model.insert(data).then(data => {

      if (data) {
         return data;
      } else {
         return {
            code: 1000,
            error: '创建失败',
         }
      }

   }).catch(error => {

      return {
         code: 1000,
         error: error.message
      }

   })

};