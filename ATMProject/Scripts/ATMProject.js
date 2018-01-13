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

    $stateProvider
        .state('stateTen', { url: '/Home', views: { "containerOne": { template: '<div class="containerOneMessage"> Welcome To The ATM Project</div>' }, "containerTwo": { template: '<a class="btn btn-default btn-lg" ui-sref="stateOne"><i class="fa fa-sign-in"></i> Login</a>' } } })
        .state('stateOne', { url: '/Login', views: { "containerTwo": { templateUrl: '/Account/Login', controller: LoginController }, "containerOne": { template: '<div class="containerOneMessage">Login</div>' } } })
        .state('stateTwo', { url: '/Logout', views: { "containerOne": { templateUrl: '/Account/Logout' } } })
        .state('stateThree', { url: '/Transaction', views: { "containerOne": {template: "<h1>Main Menu</h1>"}, "containerTwo": { templateUrl: '/Transaction/Index', controller: TransactionController } } })
        .state('stateFour', { url: '/ThankYou', views: { "containerOne": { templateUrl: '/SuccessPage.html' } } })
        .state('stateFive', { url: '/Withdraw', views: { "containerOne": {template: "<h1>Account Selection</h1>"}, "containerTwo": { templateUrl: '/Transaction/SelectAccount', controller: WithdrawController } } })
        .state('stateSix', { url: '/Retain', views: { "containerOne": { templateUrl: '/Retain.html' } } })
        .state('stateSeven', { url: '/WithdrawError', views: { "containerOne": { templateUrl: '/WithdrawError.html' } } })
        .state('stateEight', { url: '/SelectAmount/:accountNumber', views: { "containerOne": { templateUrl: function (params) { return '/Transaction/SelectAmount/' + params.accountNumber; }, controller: WithdrawController } } });
   
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

};

configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$qProvider'];

atmproject.config(configFunction);