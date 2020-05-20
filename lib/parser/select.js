'use strict';

/**
* select参数解析、验证
*/
module.exports = function (ctx, value) {

   const { fields, model } = ctx;

   const select = [];
   const selectArray = value.split(",");

   for (const field of selectArray) {

      const fieldTrim = field.trim();

      if (fields[fieldTrim]) {

         select.push(fieldTrim);

      } else {

         throw new Error(`无${model.name}模型${fieldTrim}字段select权限`);

      }

   }

   return select;

};