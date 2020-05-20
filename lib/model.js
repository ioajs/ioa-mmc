'use strict';

const ioa = require('ioa');
const { actions } = require('@app');

const mainModel = ioa.main.model;

/**
 * @param {string} name 模型名称
 * @param {object} options 函数表达式
 * @returns {function} 模型中间件
 */
module.exports = function (name, options = {}) {

  const ctxModel = mainModel[name];

  if (ctxModel === undefined) {

    throw consoln.error(new Error(`"${name}"模型不存在`));

  }

  const { aliasIndex } = ctxModel;
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
      ctx.model = ctxModel.schema(schema);
    } else {
      ctx.model = ctxModel;
    }

    ctx.fields = fields;

    ctx.select = select;

    ctx.actions = actions;

    await next();

  }

}