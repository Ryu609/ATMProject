var atmproject = angular.module('ATMProject', ['ngRoute']);
atmproject.controller('LandingPageController', LandingPageController);
atmproject.controller('LoginController', LoginController);

atmproject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
atmproject.factory('LoginFactory', LoginFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/routeOne', { templateUrl: 'routesDemo/one' })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', { templateUrl: 'routeDemo/three' })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

atmproject.config(configFunction)