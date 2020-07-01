'use strict';

/**
 * 创建单条或多条
 * @param {object} ctx 
 */
module.exports = async function (ctx) {

   const { request, model, fields, params } = ctx;
   const { body } = request;

   const data = {};

   // 字段过滤
   for (const field in fields) {
      const value = body[field];
      if (value !== undefined) {
         data[field] = value;
      }
   }

   const instance = model.updatePk(params.id, data);

   if (ctx.where) {
      instance.and(ctx.where);
   }

   const result = await instance.catch(error => {
      return {
         code: 1000,
         error: error.message
      }
   })

   return ctx.body = result || 'null';

};
