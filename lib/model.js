'use strict';

const ioa = require('ioa');
const { actions } = require('@app');

const mainModel = ioa.main.model;

module.exports = function (name) {

  const ctxModel = mainModel[name];

  if (ctxModel === undefined) {

    throw consoln.error(new Error(`"${name}"模型不存在`));

  }

  const { aliasIndex } = ctxModel;

  const fields = {}, select = [];

  for (const name in aliasIndex) {
    fields[name] = aliasIndex[name];
  }

  for (const name in fields) {
    select.push(name);
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