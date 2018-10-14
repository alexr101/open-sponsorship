'use strict';

describe('myApp.signup module', function () {
	let SignupCtrl;
	let $scope;

	beforeEach(module('myApp.signup'));
	beforeEach(inject(function (_$controller_, _$rootScope_) {
		let $controller = _$controller_;
		$scope = _$rootScope_.$new();
		SignupCtrl = $controller('SignupCtrl', {
			$scope: $scope,
		});
	}));

	it('should be defined', function () {
		expect(SignupCtrl).toBeTruthy();
	});

	it('test function should work', function () {
		let res = $scope.simpleTestableFn();
		expect(res).toEqual('this is a simple test');
	});
});