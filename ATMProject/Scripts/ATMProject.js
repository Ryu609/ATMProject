var atmproject = angular.module('ATMProject', ['ngRoute', 'ui.bootstrap']);

atmproject.controller('LandingPageController', LandingPageController);
atmproject.controller('LoginController', LoginController);
atmproject.controller('WithdrawController', WithdrawController);
////atmproject.controller('RetainCardController', RetainCardController);


atmproject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
atmproject.factory('LoginFactory', LoginFactory);
atmproject.factory('WithdrawFactory', WithdrawFactory)
atmproject.factory('RetainCardFactory', RetainCardFactory)


var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider       
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })        
        .when('/logout', { templateUrl: '/Account/Logout' })
        .when('/withdraw', { templateUrl: '/Home/Withdraw', controller : WithdrawController });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

atmproject.config(configFunction)