'use strict';

const { router, middleware, model, mtm } = require('@app');

const { auth } = middleware;

const documentUser = mtm(model.documentUser);

router.get("/documentUser", auth, documentUser, 'model.find');

router.get("/documentUser/:id", auth, documentUser, 'model.findPk');
