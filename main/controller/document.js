'use strict';

const app = require('@app');

const { model } = app.controller;

module.exports = class {
  async insert(ctx) {

    ctx.body = await model.insert(ctx);

  }
  async find(ctx) {

    await model.find(ctx);

  }
  async findPk(ctx) {

    await model.findPk(ctx);

  }
  async update(ctx) {

    ctx.body = await model.update(ctx);

  }
  async updatePk(ctx) {

    await model.updatePk(ctx);

  }
  async delete(ctx) {

    await model.delete(ctx);

  }
  async deletePk(ctx) {

    await model.deletePk(ctx);

  }
}