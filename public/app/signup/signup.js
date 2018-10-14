'use strict';

const SignupCtrl = function ($scope, $state, $http) {
	$scope.form = {
		description: '',
		location: '',
		team: '',
		name: '',
		sport: '',
		nationality: '',
		gender: '',
		dob: '',
		facebook: '',
		instagram: '',
		twitter: '',
	}

	$scope.currentTab;
	$scope.tabs = ['Basic Info', 'About', 'Social Media', 'Summary'];
	// Use these names to handle state changes dynamically
	$scope.tabsFriendlyNames = $scope.tabs.map((tabName) => {
		tabName = tabName.replace(/\s/g, ''); // remove spaces
		tabName = tabName.charAt(0).toLowerCase() + tabName.slice(1, tabName.length); // change first char to lowercase
		return tabName;
	});

	$scope.simpleTestableFn = () => {
		return 'this is a simple test';
	}

	$scope.goToTab = (tabName) => {
		$scope.currentTab = tabName;
		$state.go('signup.' + tabName);
	}

	$scope.submitSignUp = () => {
		$http({
			method: 'POST',
			data: $scope.form,
			url: '/users'
		})
		.then(onSignupSuccess, onSignupErr);
	}

	let onSignupSuccess = (res) => {
		$state.go('users');
	}

	let onSignupErr = (res) => {
		$state.go('users');
	}


}


angular.module('myApp.signup', ['ui.router'])
	.controller('SignupCtrl', ['$scope', '$state', '$http', SignupCtrl]);
