const UsersCtrl = ($scope) => {
    $scope.header = 'Users';
}

angular.module("sportsApp")
.controller("UsersCtrl",[ "$scope", UsersCtrl]);

