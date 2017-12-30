var atmproject = angular.module('ATMProject', ['ngRoute', 'ui.bootstrap']);

atmproject.controller('LandingPageController', LandingPageController);
atmproject.controller('LoginController', LoginController);
atmproject.controller('TransactionController', TransactionController);


atmproject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
atmproject.factory('LoginFactory', LoginFactory);
atmproject.factory('TransactionFactory', TransactionFactory)
atmproject.factory('RetainCardFactory', RetainCardFactory)


var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider       
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })        
        .when('/logout', { templateUrl: '/Account/Logout' })
        .when('/Transaction', { templateUrl: '/Transaction/Index', controller : TransactionController });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

atmproject.config(configFunction)