var atmproject = angular.module('ATMProject', ['ngRoute', 'ui.bootstrap']);

atmproject.controller('LandingPageController', LandingPageController);
atmproject.controller('LoginController', LoginController);
atmproject.controller('TransactionController', TransactionController);
atmproject.controller('WithdrawController', WithdrawController);

atmproject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
atmproject.factory('LoginFactory', LoginFactory);
atmproject.factory('RetainCardFactory', RetainCardFactory);
atmproject.factory('AccountsFactory', AccountsFactory);
atmproject.factory('AmountSelectionFactory', AmountSelectionFactory);
atmproject.factory('WithdrawAmountFactory', WithdrawAmountFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);
    $routeProvider
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/logout', { templateUrl: '/Account/Logout' })
        .when('/Transaction', { templateUrl: '/Transaction/Index', controller: TransactionController })
        .when('/Withdraw', { templateUrl: '/Transaction/SelectAccount', controller: WithdrawController })
        .when('/ThankYou', { templateUrl: '/SuccessPage.html', controller: LandingPageController })
        .when('/WithdrawError', { templateUrl: '/WithdrawError.html', controller: LandingPageController })
        .when('/SelectAmount/:accountNumber', {
            templateUrl: function (params) { return '/Transaction/selectAmount/' + params.accountNumber; }, controller: WithdrawController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
};

configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

atmproject.config(configFunction);