'use strict';

describe('myApp.users module', function () {

	let UsersCtrl;

	beforeEach(module('myApp.users'));
	beforeEach(inject(function (_$controller_, _$rootScope_) {
		let $controller = _$controller_;
		let $scope = _$rootScope_.$new();
		UsersCtrl = $controller('UsersCtrl', {
			$scope: $scope,
		});
	}));

	it('should be defined', function () {
		expect(UsersCtrl).toBeTruthy();
	});
});