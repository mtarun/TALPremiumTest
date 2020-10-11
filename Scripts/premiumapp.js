angular.module("PremiumApp", [])
    .controller("HomeController", function ($scope) {
        $scope.calculated = false;
        $scope.Calculate = function (premium) {
            $scope.calculated = true;
        }
    });