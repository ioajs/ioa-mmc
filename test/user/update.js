'use strict';

const test = require('jtf');
const typea = require('typea');
const faker = require('faker');
const axios = require('axios');
const ioa = require('../../index.js');

function generate() {

   return {
      age: faker.random.number(),
      name: faker.name.firstName(),
      image: faker.image.image(),
      phone: faker.phone.phoneNumber(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      xxx: 889
   }

}

test('update', async t => {

   const result = await axios.put("/user",
      {
         email: '123@qq.com'
      },
      {
         params: {
            "where": 'name.eq(Elyssa)',
         }
      });

   const schema = typea({ rowCount: Number })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);



});


test('updatePk', async t => {

   const result = await axios.put("/user/30", generate());

   const schema = typea({ rowCount: Number })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});