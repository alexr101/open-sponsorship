const HomeCtrl = ($scope) => {
    $scope.header = 'Home';
}

angular.module("sportsApp")
.controller("HomeCtrl",[ "$scope", HomeCtrl]);

