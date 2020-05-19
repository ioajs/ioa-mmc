'use strict';

const { parser } = require('@app');

/**
 * find参数转换
 */
module.exports = async function (ctx) {

  const { model, params, query } = ctx;

  const instance = model.findPk(params.id);

  if (query.select) {

    const select = parser.select(ctx, query.select);

    instance.select(...select);

  } else if (query['select!']) {

    const select = parser.noselect(ctx, query['select!']);

    instance.select(...select);

  } else {

    instance.select(...ctx.select);

  }

  if (ctx.where) {

    instance.and(ctx.where);

  }

  return await instance.then(function (data) {

    return data || '';

  }).catch(error => {

    return {
      code: 1000,
      error: error.message
    }

  })

}
