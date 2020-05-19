'use strict';

const { router, middleware } = require('@app');

const { auth, model } = middleware;

router.get("/user", auth, model('user'), 'find');

router.get("/user/:id", auth, model('user'), 'findPk');

router.post("/user", auth, model('user'), 'insert');

router.put("/user/:id", auth, model('user'), 'updatePk');

router.delete("/user/:id", auth, model('user'), 'deletePk');

router.delete("/user", auth, model('user'), 'delete');