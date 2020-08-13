'use strict';

const app = require('@app');

app.loader({
  "mid.js": {
    "level": 25,
    module($mid) {
      app.emit("model", { $mid });
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
});
