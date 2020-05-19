'use strict';

const { router, middleware } = require('@app');

const { auth, model } = middleware;

router.get("/documentUser", auth, model('documentUser'), 'find');

router.get("/documentUser/:id", auth, model('documentUser'), 'findPk');
