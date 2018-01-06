var LandingPageController = function ($scope, $window, $state) {
    $state.transitionTo('stateTen');
    $scope.models = {
        title: "ATM Application"       
    };   
};

LandingPageController.$inject = ['$scope', '$window', '$state'];