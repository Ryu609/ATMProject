var LandingPageController = function ($scope, WithdrawAmountFactory, $window) {   
    $scope.models = {
        title: "ATM Application",
        WelcomeMessage: "Welcome to the ATM application"
    };

    //Todo to put at correct location
    $scope.Withdraw = function (item, account) {
        
        var result = WithdrawAmountFactory(item, account);
        result.then(function (result) {
            if (result.success)
                $window.location.href = "/ThankYou";
            else
                $window.locaiton.href = "/WithdrawError";
        });
    }
}

LandingPageController.$inject = ['$scope', 'WithdrawAmountFactory', '$window'];