'use strict';

const test = require('jtf');
const typea = require('typea');
const axios = require('axios');
const faker = require('faker');
const ioa = require('../index.js');

function generate() {

   return {
      id: 1,
      uid: 1,
      title: faker.name.firstName(),
      document: faker.name.firstName(),
   }

}

test('get', async t => {

   const result = await axios.get(`/document`, {
      params: {
         select: 'uid,id,title,createdAt',
         where: 'title.eq(April);document.eq(xxx)|title.eq(Junius);document.eq(Adrian)',
      }
   });

   const schema = typea({ list: Array });

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});


test('get details', async t => {

   const result = await axios.get(`/document/1`);

   const schema = typea({
      id: Number,
      title: String,
      document: String,
   })

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});


test('post', async t => {

   const result = await axios.post("/document", generate());

   const schema = typea({
      id: Number,
      title: String,
      document: String,
   })

   const { data, error } = schema.verify(result.data);

   t.ok(data, error);

});


test('update', async t => {

   const result = await axios.put("/document",
      {
         id: 88,
         ...generate()
      },
      {
         params: {
            where: 'title.eq(Gina);',
            limit: 2,
         }
      }
   );

   const schema = typea({ rowCount: Number })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});


test('updatePk', async t => {

   const result = await axios.put("/document/30", generate());

   const schema = typea({ rowCount: Number })

   const { data, error } = schema.verify(result.data)

   t.ok(data, error);

});


test('delete', async t => {

   const result = await axios.delete("/document/113");

   console.log(result.data)

   t.deepEqual(result.data, { rowCount: 0 });

});