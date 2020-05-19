'use strict';

const { router, middleware } = require('@app');

const { auth, model } = middleware;

router.post('/document', model('document'), 'insert');

router.get('/document', auth, model('document'), 'find');

router.get('/sdfsf/document', model('document'), 'find');

router.get('/document/:id', model('document'), 'findPk');

router.put('/document/:id', model('document'), 'updatePk');

router.delete('/document/:id', model('document'), 'deletePk');

router.delete('/document', model('document'), 'delete');
