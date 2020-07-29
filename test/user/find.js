'use strict';

const test = require('jmr');
const typea = require('typea');
const axios = require('axios');

test('get', async t => {

   const result = await axios.get("/user");

   const schema = typea({ list: [Object] });

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});

test('get select', async t => {

   const result = await axios.get(`/user`, {
      "params": {
         "select": 'name,email',
         "limit": 10
      }
   })

   const schema = typea({ list: [Object] })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});


test('get select!', async t => {

   const result = await axios.get(`/user`, {
      params: {
         "select!": 'name,email',
         limit: 10
      }
   })

   const schema = typea({ list: [Object] })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});



test('get where', async t => {

   const result = await axios.get(`/user`, {
      params: {
         "select": 'name,email',
         "where": 'name.eq(April);email.eq(Kareem.Kerluke@yahoo.com)',
         "limit": 10
      }
   })

   const schema = typea({ list: [Object] })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});


test('get and', async t => {

   const result = await axios.get(`/user`, {
      params: {
         where: 'name.eq(April)',
         and: 'email.eq(Kareem.Kerluke@yahoo.com)',
         limit: 10
      }
   })

   const schema = typea({ list: [Object] })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});

test('get or', async t => {

   const result = await axios.get(`/user`, {
      params: {
         where: 'name.in(April, tt) | email.in(Kareem.Kerluke@yahoo.com, Janae.Kiehn95@yahoo.com)',
         limit: 10
      }
   })

   const schema = typea({ list: [Object] })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});

test('get in', async t => {

   const result = await axios.get(`/user`, {
      params: {
         where: 'email.in(Kareem.Kerluke@yahoo.com, Janae.Kiehn95@yahoo.com)',
         limit: 10
      }
   })

   const schema = typea({ list: [Object] })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});

test('get count', async t => {

   const result = await axios.get(`/user`, {
      params: {
         where: "name.eq(April);email.eq(Kareem.Kerluke@yahoo.com)",
         count: true
      }
   })

   console.log(result.data)

   const schema = typea({
      list: [Object],
      count: Number
   })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});