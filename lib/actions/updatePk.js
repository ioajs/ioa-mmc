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

   return await instance.then(data => {

      if (data) {
         return data;
      } else {
         return {
            code: 1000,
            error: '更新失败',
         }
      }

   }).catch(error => {

      return {
         code: 1000,
         error: error.message
      }

   })

};
