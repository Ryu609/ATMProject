var LandingPageController = function ($scope, $window, WithdrawAmountFactory) {   
    $scope.models = {
        title: "ATM Application",
        WelcomeMessage: "Welcome to the ATM application"
    };
}

LandingPageController.$inject = ['$scope', '$window','WithdrawAmountFactory'];