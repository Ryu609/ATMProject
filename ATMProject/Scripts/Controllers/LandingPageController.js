var LandingPageController = function ($scope, WithdrawAmountFactory, $window) {
    $scope.WithdrawMessage = "";

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