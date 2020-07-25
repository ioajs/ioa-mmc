'use strict';

const test = require('jmr');
const typea = require('typea');
const axios = require('axios');
const faker = require('faker');
const ioa = require('../index.js');

const userSchema = typea({
   age: Number,
   email: String,
   id: Number,
   image: String,
   name: String,
   phone: String
});

function generate() {

   return {
      age: faker.random.number(),
      name: faker.name.firstName(),
      image: faker.image.image(),
      phone: faker.phone.phoneNumber(),
      password: faker.internet.password(),
      email: faker.internet.email()
   }

}

test('get list', async t => {

   const result = await axios.get(`/user?limit=3&page=2`);

   const schema = typea({
      list: [
         {
            id: Number,
            age: Number,
            email: String,
         }
      ]
   })

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});


test('get list', async t => {

   const result = await axios.get(`/user?where=name.eq(kk);image.eq(uu)|phone.ne(188)`);

   const schema = typea({
      list: [
         {
            id: Number,
            age: Number,
            email: String,
         }
      ]
   })

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});


test('get details', async t => {

   const result = await axios.get(`/user/82`, {
      headers: { sign: "xxxx" }
   });

   const { data, error } = userSchema.verify(result.data);

   t.ok(data, error);

});


test('get details null', async t => {

   const result = await axios.get(`/user/1111111111`, {
      headers: { sign: "xxxx" }
   });

   t.ok(result.data === null, '返回值必须为null');

});


test('post', async t => {

   const result = await axios.post("/user", generate());

   const { data, error } = userSchema.verify(result.data);

   t.ok(data, error);

});


test('update pk', async t => {

   const result = await axios.put("/user/81", generate());

   const schema = typea({
      age: Number,
      email: String,
      id: 81,
      image: String,
      name: String,
      password: String,
      phone: String,
      updatedAt: Date
   });

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});

test('delete', async t => {

   const result = await axios.delete("/user/113");

   t.deepEqual(result.data, null);

});