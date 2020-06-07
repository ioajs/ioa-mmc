'use strict';

const ormv = require('ormv');
const consoln = require('consoln');
const { actions } = require('@app');

/**
 * @param {object} model 模型实例
 * @param {object} options 函数表达式
 * @returns {function} 模型中间件
 */
module.exports = function (model, options = {}) {

  if (typeof model !== 'object') {
    throw consoln.error(new Error(`模型必须为orm实例`));
  }

  const { aliasIndex } = model;
  const fields = {}, select = [];

  const { include, exclude } = options;

  if (include) {

    for (const name of include) {

      const field = aliasIndex[name];

      if (field) {

        fields[name] = field;
        select.push(name);

      } else {

        throw new Error(`${name}字段无效`);

      }

    }

  } else if (exclude) {

    for (const name in aliasIndex) {

      if (exclude.includes(name) === false) {

        fields[name] = aliasIndex[name];
        select.push(name);

      }

    }

  } else {

    for (const name in aliasIndex) {
      fields[name] = aliasIndex[name];
      select.push(name);
    }

  }

  return async function (ctx, next) {

    const { schema } = ctx;

    if (schema) {
      ctx.model = model.schema(schema);
    } else {
      ctx.model = model;
    }

    ctx.fields = fields;

    ctx.select = [...select];

    ctx.actions = actions;

    await next();

  }

}