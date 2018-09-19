const homeCtrl = require('../controllers/homeCtrl');

exports.init = (app) => {

    app.route('/')
        .get(homeCtrl.index)
};