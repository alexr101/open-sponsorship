'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'uiRouterStyles',
	'ui.router',
	'myApp.users',
	'myApp.signup',
	'myApp.version'
]).
config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

	$locationProvider.hashPrefix('!');
	$urlRouterProvider.when('/signup','/signup/basicInfo');

	$stateProvider

	.state('users', {
		url: '/users',
		templateUrl: 'users/users.html',
		controller: 'UsersCtrl'
	})

	.state('signup', {
		url: '/signup',
		templateUrl: '/signup/signup.html',
		controller: 'SignupCtrl',
		data: {
			css: 'signup/signup.css'
		}
	})
	.state('signup.basicInfo', {
		url: '/basicInfo',
		templateUrl: 'signup/basicInfo/basicInfo.html',
	})
	.state('signup.about', {
		url: '/about',
		templateUrl: 'signup/about/about.html',
	})
	.state('signup.socialMedia', {
		url: '/socialMedia',
		templateUrl: 'signup/socialMedia/socialMedia.html',
	})
	.state('signup.summary', {
		url: '/summary',
		templateUrl: 'signup/summary/summary.html',
	})


}])
.controller('AppCtrl', ['$scope', '$state', function ($scope, $state) {
	$scope.appName = 'OPEN  SPONSORSHIP';
}]);


