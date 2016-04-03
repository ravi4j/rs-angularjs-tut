/**
 * Created by ravi on 4/3/16.
 */



var rsApp = angular.module('rsApp', []);

rsApp.controller('rsController', ['$scope', function($scope) {

    $scope.name = 'default';
    $scope.customName = 'customName'

    $scope.getName = function(name) {
        $scope.name = name;
    };
    
}]);


