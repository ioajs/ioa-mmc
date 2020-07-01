'use strict';

const { parser } = require('@app');

/**
 * 创建单条或多条
 * @param {Object} ctx 
 */
module.exports = async function (ctx) {

   const { request, model, fields } = ctx;
   const { body } = request;

   const data = {};

   // 字段过滤
   for (const field in fields) {
      const value = body[field];
      if (value !== undefined) {
         data[field] = value;
      }
   }

   const instance = model.update(data);

   ctx.instance = instance;

   parser.where(ctx);

   const result = await instance.catch(error => {
      return {
         code: 1000,
         error: error.message
      }
   })

   return ctx.body = result || 'null';

};