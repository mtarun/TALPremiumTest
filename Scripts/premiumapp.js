// Angular Module and Controller

angular.module("PremiumApp", [])
    .controller("HomeController", function ($scope) {

        $scope.calculated = false;
        $scope.Calculate = function (premium) {
            $scope.calculated = true;

            if ($scope.formCalculate.$valid) {
                $scope.changedValue(premium);
            }
        }

        // Array List to store Occupation Values with their Ratings for the Occupation Dropdown
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
        //  Name value pair array for Occupation Rating
        occupationRating = { "Professional": 1.0, "White Collar": 1.25, "Light Manual": 1.50, "Heavy Manual": 1.75 };

        // Function to do the Calculation 
        $scope.changedValue = function (item) {
                //Set the Premium Value
                $scope.calculation = (item.DeathSumInsured * occupationRating[item.Occupation] * item.Age) / (1000 * 12);
        }
    });


