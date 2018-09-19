// Core routing component to init all mo

exports.init = (app) => {
    var UserRoutes = require('../users')
    UserRoutes.init(app);

    var HomeRoute = require('../home')
    HomeRoute.init(app);

    var SportAppRoutes = require('../sportsApp')
    SportAppRoutes.init(app);
}

