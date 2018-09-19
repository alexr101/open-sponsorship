/**
 * Separate configurations by utility to keep concerns separated
 */
angular.module("sportsApp")
	
    //Gets rid of unwanted prefixes in routes
    .config(function($locationProvider){
        $locationProvider.hashPrefix("");
    })

    // Configure our routes
    .config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/Home.html',
                controller  : 'HomeCtrl'
            })

            // route for the about page
            .when('/signup', {
                templateUrl : 'views/Signup.html',
                controller  : 'SignupCtrl'
            })

            // route for the contact page
            .when('/users', {
                templateUrl : 'views/Users.html',
                controller  : 'UsersCtrl'
            });
    });