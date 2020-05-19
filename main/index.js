'use strict';

const app = require('@app');

app.on('@ioa/config');
app.on('@ioa/ormv');
app.on('@ioa/koa');
app.on('./lib');
