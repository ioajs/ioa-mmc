'use strict';

const { router, middleware, model } = require('@app');

const { auth, modelCtx } = middleware;

const document = modelCtx(model.document);

router.post('/@document', document, '@document.insert');

router.get('/@document', auth, document, '@document.find');

router.get('/@sdfsf/document', document, '@document.find');

router.get('/@document/:id', document, '@document.findPk');

router.put('/@document/:id', document, '@document.updatePk');

router.delete('/@document/:id', document, '@document.deletePk');

router.delete('/@document', document, '@document.delete');
