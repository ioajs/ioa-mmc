'use strict';

/**
 * 删除单条或多条
 * @param {object} ctx 
 */
module.exports = async function (ctx) {

   const { model, where, params } = ctx;

   const instance = model.deletePk(params.id);

   if (where) {
      instance.and(where);
   }

   const result = await instance.catch(error => {
      return {
         code: 1000,
         error: error.message
      }
   })

   return ctx.body = result || "null";

}
