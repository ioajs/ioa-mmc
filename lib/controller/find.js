'use strict';

const { parser } = require('@app');
const consoln = require('consoln');

/**
 * find路由，single表示单表，compound表示复合表
 */
module.exports = async function (ctx) {

   const { model, query } = ctx;

   const instance = model.find();

   ctx.instance = instance;

   if (query.select) {

      const select = parser.select(ctx, query.select);
      instance.return(...select);

   } else if (query['select!']) {

      const select = parser.nselect(ctx, query['select!']);
      instance.return(...select);

   } else {

      instance.return(...ctx.select);

   }

   parser.where(ctx);

   const { limit, page = 1, order, count } = query;

   if (limit) {

      instance.offset((page - 1) * limit);
      instance.limit(limit);

   }

   if (order) {

      const options = parser.order(ctx, order);
      instance.order(options);

   }

   if (count === undefined) {

      return ctx.body = await instance.then(list => {
         return { list };
      }).catch(error => {

         consoln.error(error);
         
         return {
            code: 1000,
            error: error.message
         };

      })

   } else {

      const modelCount = instance.count();

      return ctx.body = await Promise.all([instance, modelCount]).then(data => {
         const [list, count] = data;
         return {
            list,
            count
         }
      }).catch(error => {

         consoln.error(error);

         return {
            code: 1000,
            error: error.message
         };

      })

   }

}