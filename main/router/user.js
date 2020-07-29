'use strict';

const { router, middleware, model } = require('@app');

const { auth } = middleware;

const user = model.$mid(model.user, { exclude: ['password'] });

router.get("/user", auth, user, 'model.find');

router.get("/user/:id", auth, user, 'model.findPk');

router.post("/user", auth, user, 'model.insert');

router.put("/user/:id", auth, user, 'model.updatePk');

router.delete("/user/:id", auth, user, 'model.deletePk');

router.delete("/user", auth, user, 'model.delete');