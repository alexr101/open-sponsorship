const sportsAppCtrl = require('../controllers/sportsAppCtrl');

exports.init = (app) => {
    app.route('/sportsApp')
        .get(sportsAppCtrl.init)
};