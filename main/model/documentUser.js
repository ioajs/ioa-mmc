'use strict';

const { ormv } = require('@app');
require('./document.js');
require('./user.js');

module.exports = ormv.virtual('document leftJoin user',
   {
      'id': 'document',
      'uid': 'document',
      'title': 'document',
      'document': 'document',
      'createdAt': 'document',
      'updatedAt': 'document',
      'name': 'user',
      'xxx': 'user.age',
      'image': 'user',
      'phone': 'user',
      'email': 'user',
   },
   { 'document.uid': 'user.id' }
);
