'use strict';

const test = require('jtf');
const typea = require('typea');
const axios = require('axios');
const ioa = require('../../index.js');

test('get', async t => {

   const result = await axios.get("/user/81");

   const schema = typea({ id: Number });

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});