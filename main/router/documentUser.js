'use strict';

const { router, middleware } = require('@app');

const { auth, model } = middleware;

const documentUser = model('documentUser');

router.get("/documentUser", auth, documentUser, 'find');

router.get("/documentUser/:id", auth, documentUser, 'findPk');
