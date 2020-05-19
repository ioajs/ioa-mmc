'use strict';

const { ormv } = require('@app');

const model = ormv.model('user', {
   'id': {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
   },
   'name': {
      type: 'string',
      allowNull: false,
   },
   'age': {
      type: 'integer'
   },
   'image': {
      type: 'string'
   },
   'phone': {
      type: 'string'
   },
   'password': {
      type: 'string'
   },
   'email': {
      type: 'string'
   }
});

// model.sync();

module.exports = model;