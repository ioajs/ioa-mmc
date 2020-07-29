'use strict';

const test = require('jmr');
const typea = require('typea');
const faker = require('faker');
const axios = require('axios');

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

   const result = await axios.put("/user/81",
      {
         email: '123@qq.com'
      },
      {
         params: {
            "where": 'name.eq(Elyssa)',
         }
      });


   t.deepEqual(result.data.email, '123@qq.com');

});


test('updatePk', async t => {

   const result = await axios.put("/user/81", generate());

   t.deepEqual(result.data.id, 81);

});