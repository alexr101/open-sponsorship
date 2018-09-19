const SignupCtrl = ($scope) => {
    $scope.header = 'Signup';
}

angular.module("sportsApp")
.controller("SignupCtrl",[ "$scope", SignupCtrl]);

