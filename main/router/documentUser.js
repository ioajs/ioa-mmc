'use strict';

const { router, middleware, model } = require('@app');

const { auth } = middleware;

const documentUser = model.$mid(model.documentUser);

router.get("/documentUser", auth, documentUser, 'model.find');

router.get("/documentUser/:id", auth, documentUser, 'model.findPk');
