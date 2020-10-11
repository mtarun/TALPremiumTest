angular.module("PremiumApp", [])
    .controller("HomeController", function ($scope) {
        $scope.calculated = false;
        $scope.Calculate = function (premium) {
            $scope.calculated = true;

            $scope.$watch('formCalculate.$valid', function (newValue) {
                $scope.isFormValid = newValue;
            });

            if ($scope.isFormValid) {
                $scope.changedValue(premium);
            }
        }
        $scope.arrlist = [{
            "rating": "Light Manual",
            "occupation": "Cleaner"
        }, {
            "rating": "Professional",
            "occupation": "Doctor"
        }, {
            "rating": "White Collar",
            "occupation": "Author"
        }, {
            "rating": "Heavy Manual",
            "occupation": "Farmer"
        }, {
            "rating": "Heavy Manual",
            "occupation": "Mechanic"
        }, {
            "rating": "Light Manual",
            "occupation": "Florist"
        }];
        occupationRating = { "Professional": 1.0, "White Collar": 1.25, "Light Manual": 1.50, "Heavy Manual": 1.75 };
        $scope.changedValue = function (item) {
            if ($scope.isFormValid) {
                $scope.calculation = ((item.DeathSumInsured * occupationRating[item.Occupation] * item.Age) / 1000) * 12;
            }
        }
    });


