'use strict';

const test = require('jtf');
const typea = require('typea');
const axios = require('axios');
const ioa = require('../../index.js');

test('destroy', async t => {

   const result = await axios.delete("/user", {
      "params": {
         "where": 'name.eq(Izaiah)',
         // "and": 'age.eq(34)',
         // "or": 'email.eq(Lawson6@hotmail.com);phone.ne(906-190-9548)',
      }
   });

   const schema = typea({ rowCount: Number })

   const { data, error } = schema.strictVerify(result.data)

   t.ok(data, error);

});


test('destroyPk', async t => {

   const result = await axios.delete("/user/12");

   const schema = typea({ rowCount: Number })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});