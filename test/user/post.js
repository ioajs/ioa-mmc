'use strict';

const test = require('jmr');
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


test('post', async t => {

   const result = await axios.post("/user", generate());

   const schema = typea({
      id: Number,
      name: String
   })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});