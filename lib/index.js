'use strict';

const app = require('@app');

app.loader({
  "modelCtx.js": {
    "level": 30,
    module(modelCtx) {
      app.emit("middleware", { modelCtx });
    }
  },
  "parser": {
    "level": 35
  },
  "controller": {
    "level": 40,
    after({ data: model }) {
      app.emit("controller", { model });
    }
  },
})