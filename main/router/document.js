'use strict';

const { router, middleware } = require('@app');

const { auth, model } = middleware;

const document = model('document');

router.post('/document', document, 'insert');

router.get('/document', auth, document, 'find');

router.get('/sdfsf/document', document, 'find');

router.get('/document/:id', document, 'findPk');

router.put('/document/:id', document, 'updatePk');

router.delete('/document/:id', document, 'deletePk');

router.delete('/document', document, 'delete');
