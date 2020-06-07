'use strict';

const { router, middleware, model } = require('@app');

const { auth, modelCtx } = middleware;

const documentUser = modelCtx(model.documentUser);

router.get("/documentUser", auth, documentUser, 'model.find');

router.get("/documentUser/:id", auth, documentUser, 'model.findPk');
