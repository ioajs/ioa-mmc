'use strict';

const test = require('jmr');
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

   t.deepEqual(result.data, null);

});


test('destroyPk', async t => {

   const result = await axios.delete("/user/12");

   t.deepEqual(result.data, null);

});