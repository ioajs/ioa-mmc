'use strict';

module.exports = {
  async insert(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.insert(ctx);

  },
  async find(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.find(ctx);

  },
  async findPk(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.findPk(ctx);

  },
  async update(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.update(ctx);

  },
  async updatePk(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.updatePk(ctx);

  },
  async delete(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.delete(ctx);

  },
  async deletePk(ctx) {

    const { actions } = ctx;

    ctx.body = await actions.deletePk(ctx);

  }
}