'use strict'

const sortType = {
   'desc': true,
   'asc': true
}

/**
* 排序参数解析
*/
function order(ctx, order) {

   const { fields, model } = ctx;

   const orderArray = order.split(";")

   const orderObj = {};

   for (const item of orderArray) {

      const [field, type] = item.trim().split(".");

      if (fields[field] === undefined) {
         throw new Error(`找不到${model.name}模型order.${field}字段`);
      }

      if (sortType[type] === undefined) {
         throw new Error(`order选项值不允许为${type}，可选值：desc、asc`);
      }

      orderObj[field] = type;

   }

   return orderObj;

}

module.exports = order;