'use strict';

const UsersCtrl = function ($scope, $state, $http) {
	$scope.pageTitle = 'Users';

  $scope.users = [];
	$scope.getUsers = () => {
		$http({
			method: 'GET',
			url: '/users'
		})
		.then(getUsersSuccess, getUsersErr);
	}

	let getUsersSuccess = (res) => {
		$scope.users = res.data;
	}
	let getUsersErr = (res) => {
		console.log(res);
	}
	
  $scope.getUsers();
}


angular.module('myApp.users', ['ui.router'])
	.controller('UsersCtrl', ['$scope', '$state', '$http', UsersCtrl]);
