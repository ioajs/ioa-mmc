'use strict';

/**
* select!参数解析、验证
*/
module.exports = function (ctx, value) {

   const { fields } = ctx;

   const select = [];

   const noSelectArray = value.split(",").map(item => item.trim())

   for (const field in fields) {

      if (noSelectArray.includes(field) === false) {

         select.push(field);
         
      }

   }

   return select;

};