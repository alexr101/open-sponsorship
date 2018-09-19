const usersCtrl = require('../api/usersApi');
const { check } = require('express-validator/check');

exports.init = (app) => {

    app.route('/users')
        .get(usersCtrl.getAll)
        .post(usersCtrl.create, [
            check('username').isEmail(),
            check('password').isLength({ min: 5 })
        ]);

    app.route('/users/:id')
        .get(usersCtrl.get)
        .put(usersCtrl.update)
        .delete(usersCtrl.delete);
};