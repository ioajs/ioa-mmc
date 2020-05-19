'use strict';

/**
 * 删除单条或多条
 * @param {object} ctx 
 */
module.exports = async function (ctx) {

   const { model, where, params } = ctx;

   const ids = params.id.split(',');

   const instance = model.deletePk(...ids);

   if (where) {
      instance.and(where);
   }

   return await instance.then(data => {
      return data;
   }).catch(error => {
      return {
         code: 1000,
         error: error.message
      }
   })

}
