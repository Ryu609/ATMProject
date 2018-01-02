var atmproject = angular.module('ATMProject', ['ngRoute', 'ui.bootstrap']);

atmproject.controller('LandingPageController', LandingPageController);
atmproject.controller('LoginController', LoginController);
atmproject.controller('TransactionController', TransactionController);
atmproject.controller('WithdrawController', WithdrawController);

atmproject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
atmproject.factory('LoginFactory', LoginFactory);
atmproject.factory('TransactionFactory', TransactionFactory);
atmproject.factory('RetainCardFactory', RetainCardFactory);
atmproject.factory('WithdrawFactory', WithdrawFactory);
atmproject.factory('AmountSelectionFactory', AmountSelectionFactory);
atmproject.factory('WithdrawAmountFactory', WithdrawAmountFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/logout', { templateUrl: '/Account/Logout' })
        .when('/Transaction', { templateUrl: '/Transaction/Index', controller: TransactionController })
        .when('/Withdraw', { templateUrl: '/Transaction/SelectAccount', controller: WithdrawController })
        .when('/SelectAmount/:accountNumber', {
            templateUrl: function (params) {
                return '/Transaction/selectAmount?accountNumber=' + params.accountNumber;
            }});
        
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

atmproject.config(configFunction)