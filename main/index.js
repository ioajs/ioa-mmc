'use strict';

const app = require('@app');

app.use('@ioa/config');
app.use('@ioa/ormv');
app.use('@ioa/koa');
app.use('./lib');
