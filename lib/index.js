'use strict';

const app = require('@app');

app.loader({
  "parser": {
    "level": 35
  },
  "controller": {
    "level": 40,
    after({ data: model }) {
      app.emit("controller", { model });
    }
  },
  "mtm.js": {
    "level": 40,
    module(func) {
      app.emit("mtm", func);
    }
  },
});
