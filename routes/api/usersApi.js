const usersApiCtrl = require('../../controllers/api/usersApiCtrl');
const { check } = require('express-validator/check');

exports.init = (app) => {

    app.route('/users')
        .get(usersApiCtrl.getAll)
        .post(usersApiCtrl.create, [
            // no time for this
            // check('username').isEmail(),
            // check('password').isLength({ min: 5 })
        ]);

    app.route('/users/:id')
        .get(usersApiCtrl.get)
        .put(usersApiCtrl.update)
        .delete(usersApiCtrl.remove);
};