'use strict';

const app = require('@app');

app.loader({
  "actions": {
    "level": 25
  },
  "modelCtx.js": {
    "level": 30,
    module(modelCtx) {
      app.emit("middleware", { modelCtx });
    }
  },
  "parser": {
    "level": 35
  },
  "controller.js": {
    "level": 50,
    module(model) {
      app.emit("controller", { model });
    }
  },
})