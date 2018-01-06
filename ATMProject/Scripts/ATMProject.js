var atmproject = angular.module('ATMProject', ['ui.router', 'ui.bootstrap', 'ngMessages']);

atmproject.controller('LandingPageController', LandingPageController);
atmproject.controller('LoginController', LoginController);
atmproject.controller('TransactionController', TransactionController);
atmproject.controller('WithdrawController', WithdrawController);

atmproject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
atmproject.factory('LoginFactory', LoginFactory);
atmproject.factory('RetainCardFactory', RetainCardFactory);
atmproject.factory('AccountsFactory', AccountsFactory);
atmproject.factory('WithdrawAmountFactory', WithdrawAmountFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $qProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
    //$routeProvider
    //    .when('/login', {
    //        templateUrl: '/Account/Login',
    //        controller: LoginController
    //    })
    //    .when('/logout', { templateUrl: '/Account/Logout' })
    //    .when('/Transaction', { templateUrl: '/Transaction/Index', controller: TransactionController })
    //    .when('/Withdraw', { templateUrl: '/Transaction/SelectAccount', controller: WithdrawController })
    //    .when('/ThankYou', { templateUrl: '/SuccessPage.html', controller: LandingPageController })
    //    .when('/Retain', { templateUrl: '/Retain.html', controller: LandingPageController })
    //    .when('/WithdrawError', { templateUrl: '/WithdrawError.html', controller: LandingPageController })
    //    .when('/SelectAmount/:accountNumber', {
    //        templateUrl: function (params) { return '/Transaction/selectAmount/' + params.accountNumber; }, controller: WithdrawController
    //    });

    //$httpProvider.interceptors.push('AuthHttpResponseInterceptor');

    $stateProvider
        .state('stateOne', { url: '/Login', views: { "containerOne": { templateUrl: '/Account/Login', controller: LoginController }} })
        .state('stateTwo', { url: '/Logout', views: { "containerOne": { templateUrl: '/Account/Logout' } } })
        .state('stateThree', { url: '/Transaction', views: { "containerOne": { templateUrl: '/Transaction/Index', controller: TransactionController } } })
        .state('stateFour', { url: '/ThankYou', views: { "containerOne": { templateUrl: '/SuccessPage.html', controller: LandingPageController } } })
        .state('stateFive', { url: '/Withdraw', views: { "containerOne": { templateUrl: '/Transaction/SelectAccount', controller: WithdrawController } } })
        .state('stateSix', { url: '/Retain', views: { "containerOne": { templateUrl: '/Retain.html', controller: LandingPageController } } })
        .state('stateSeven', { url: '/WithdrawError', views: { "containerOne": { templateUrl: '/WithdrawError.html', controller: LandingPageController } } })
        .state('stateEight', { url: '/SelectAmount/:accountNumber', views: { "containerOne": { templateUrl: function (params) { return '/Transaction/SelectAmount/' + params.accountNumber; }, controller: WithdrawController}} })
    //$stateProvider.state('stateTwo', {
    //    url: '/stateTwo',
    //    views: {
    //        "containerOne": { templateUrl: '/Account/Login', controller: LoginController },
    //        "containerTwo": {
    //            templateUrl: '/Account/Logout'
    //        }
    //    }
    //})
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

};

configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$qProvider'];

atmproject.config(configFunction);