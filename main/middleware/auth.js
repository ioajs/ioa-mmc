'use strict';

module.exports = async function (ctx, next) {

    ctx.auth = { uid: 1 };

    await next();

}