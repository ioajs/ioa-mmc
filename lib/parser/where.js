'use strict';

const _logic = require('./_logic.js');

/**
 * where参数解析
 */
module.exports = function (ctx) {

  const { instance, query } = ctx;

  // 外部where约束
  if (query.where) {

    const ors = query.where.split('|');

    const where = ors.shift();

    const value = _logic(ctx, where);

    instance.where(value);

    if (ors.length) {

      for (const item of ors) {

        const value = _logic(ctx, item);

        instance.or(value);

      }

    }

  }

  // 内部where约束
  if (ctx.where) {

    const { where, fields } = ctx;
    const whereArray = [];

    for (const alias in where) {

      const field = fields[alias];
      
      if (field) {
        const value = where[alias];
        whereArray.push(`${field} = '${value}'`);
      } else {
        throw Error(`where中${alias}字段不存在`);
      }

    }

    const whereSql = whereArray.join(' AND ');
    const { logic } = instance;

    if (logic.length === 0) {

      logic.push(whereSql);

    } else if (logic.length === 1) {

      logic.unshift(`${whereSql} AND `);

    } else {

      // ctx.where作为最高优先级条件，来自query外部逻辑必须为子逻辑
      logic.unshift(`${whereSql} AND (`);
      logic.push(')');

    }

  }

}