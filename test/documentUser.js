'use strict';

const test = require('jtf');
const typea = require('typea');
const axios = require('axios');
const ioa = require('../index.js');

const schema = typea({
   list: [Object],
   count: Number
})

test('get', async t => {

   const result = await axios.get(`/documentUser`, {
      "params": {
         "select": "id,image",
         "where": "email.eq(Kareem.Kerluke@yahoo.com)",
         "order": "id.desc",
         "count": true
      }
   })

   const { data, error } = schema.strictVerify(result.data);

   t.ok(data, error);

});

test('get 2', async t => {

   const result = await axios.get(`/documentUser`, {
      "params": {
         "where": "uid.eq(1)"
      }
   })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});