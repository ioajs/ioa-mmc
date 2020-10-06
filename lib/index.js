'use strict';

const app = require('@app');

app.loader({
  "parser": {
    "level": 40
  },
  "mtm.js": {
    "level": 40,
    module(func) {
      app.emit("mtm", func);
    }
  },
  "controller": {
    "level": 45,
    after({ data: model }) {
      app.emit("controller", { model });
    }
  },
});
