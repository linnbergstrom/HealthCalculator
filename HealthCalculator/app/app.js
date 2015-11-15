(function () {
    angular.module('HealthCalc', [])
    .filter("kcal", function () {
        return function (input) {
            return Math.round(input) + " kcal";
        };
    })
    .controller('HealthController', function ($scope) {
        $scope.weight = 65;
        $scope.height = 166;
        //$scope.ages = [{ id: 1, name: "18-29" }, { id: 2, name: "30-60" }, { id: 3, name: "60+" }]
        $scope.gender = [{ id: "F", name: "Woman" }, { id: "M", name: "Man" }];
        $scope.selectedAge = 35; //$scope.ages[1];
        $scope.selectedGender = $scope.gender[0];
        //var bmi = $scope.bmi;

        $scope.bmi = function () {
            var weight = $scope.weight;
            var height = $scope.height;
            return (weight / (height / 100 * height / 100)).toFixed(1);
        }

        $scope.range = function () {
            var weight = $scope.weight;
            var height = $scope.height;

            var rangeMin = (18.5 * (height / 100 * height / 100)).toFixed(1);
            var rangeMax = (24.99 * (height / 100 * height / 100)).toFixed(1);

            return (rangeMin + " - " + rangeMax + " kg");
        }

        $scope.need = function () {
            var weight = $scope.weight;
            var height = $scope.height;
            var gender = $scope.selectedGender;
            var age = $scope.selectedAge;

            if (gender.id === "F") {
                return Math.round((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161);
            }
            else {
                return Math.round((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5);
            }
        }
    }

    );
})();