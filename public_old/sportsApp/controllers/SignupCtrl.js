const SignupCtrl = ($scope) => {
    this.scope = $scope;
    $scope.header = 'Signup';
    $scope.step = 1;
    $scope.next = function(){
        if($scope.step < 3) $scope.step++;
    }
    $scope.back = function(){
        if($scope.step > 1) $scope.step--;
    }
}

angular.module("sportsApp")
.controller("SignupCtrl",[ "$scope", SignupCtrl]);

