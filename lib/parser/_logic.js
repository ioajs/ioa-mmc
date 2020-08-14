'use strict';

const Ormv = require('ormv');

const { Op } = Ormv;
const reg = /^(\w+)\.(\w+)\(([^\)]*)\)$/;

/**
 * 解析字段组
 * @param {Object} ctx 
 * @param {String} express 函数表达式
 * @returns {Object} 包含多个字段的and条件
 */
module.exports = function (ctx, express) {

  const result = {};
  const { fields, model, method } = ctx;

  const fieldsArray = express.split(';');

  for (const fieldAction of fieldsArray) {

    const actionMatch = fieldAction.trim().match(reg);

    if (actionMatch) {

      const [, alias, operator, parameter] = actionMatch;

      const field = fields[alias];

      // 字段约束检验
      if (!field) {
        throw new Error(`无${model.name}模型${method}.${alias}字段where权限`);
      }

      const operatorFunc = Op[`$${operator}`];

      if (operatorFunc === undefined) {
        throw new Error(`Ormv.Op运算符“${operator}”无效`);
      }

      // const parameterDecode = decodeURIComponent(parameter);

      // 函数参数值拆分
      const parameterArray = parameter.split(',');
      const parameterArrayTrim = parameterArray.map(item => item.trim());

      result[alias] = operatorFunc(...parameterArrayTrim);

    }

  }

  return result;

};