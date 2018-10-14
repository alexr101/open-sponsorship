// Core routing component to init all mo

exports.init = (app) => {
    var UserApiRoutes = require('../api/usersApi')
    UserApiRoutes.init(app);

    var HomeRoute = require('../home')
    HomeRoute.init(app);

    var SportAppRoutes = require('../sportsApp')
    SportAppRoutes.init(app);
}

