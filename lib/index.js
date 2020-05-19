'use strict';

const app = require('@app');

app.loader({
  "actions": {
    "level": 25
  },
  "model.js": {
    "level": 30,
    module(model) {
      app.emit("middleware", { model });
    }
  },
  "parser": {
    "level": 35
  },
  "controller.js": {
    "level": 50,
    module(controller) {
      app.emit("controller", controller);
    }
  },
})