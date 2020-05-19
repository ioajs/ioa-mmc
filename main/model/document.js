'use strict';

const { ormv } = require('@app');

const model = ormv.model('document', {
   'id': {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
   },
   'uid': {
      type: 'integer',
      allowNull: false,
   },
   'title': {
      name: '标题',
      type: 'string',
      allowNull: false,
   },
   'document': {
      name: 'markdown文档',
      type: 'string',
      allowNull: false,
   }
})

// model.sync();

module.exports = model;
