'use strict';

const { router, middleware } = require('@app');

const { auth, model } = middleware;

const user = model('user');

router.get("/user", auth, user, 'find');

router.get("/user/:id", auth, user, 'findPk');

router.post("/user", auth, user, 'insert');

router.put("/user/:id", auth, user, 'updatePk');

router.delete("/user/:id", auth, user, 'deletePk');

router.delete("/user", auth, user, 'delete');