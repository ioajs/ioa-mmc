'use strict';

const { router, middleware, model } = require('@app');

const { auth } = middleware;

const document = model.$mid(model.document);

router.post('/document', document, 'model.insert');

router.get('/document', auth, document, 'model.find');

router.get('/sdfsf/document', document, 'model.find');

router.get('/document/:id', document, 'model.findPk');

router.put('/document/:id', document, 'model.updatePk');

router.delete('/document/:id', document, 'model.deletePk');

router.delete('/document', document, 'model.delete');
