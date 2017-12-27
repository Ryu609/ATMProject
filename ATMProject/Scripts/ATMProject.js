var atmproject = angular.module('ATMProject', ['ngRoute']);
atmproject.controller('LandingPageController', LandingPageController);

var configFunction = function($routeProvider) {
    $routeProvider
        .when('/routeOne', { templateUrl: 'routesDemo/one' })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }})
        .when('/routeThree', { templateUrl: 'routeDemo/three' });
        
}

configFunction.$inject = ['$routeProvider'];

atmproject.config(configFunction)