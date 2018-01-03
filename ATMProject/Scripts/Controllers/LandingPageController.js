var LandingPageController = function ($scope, WithdrawAmountFactory) {
    $scope.WithdrawMessage = "";

    $scope.Withdraw = function (item, account) {
        console.log(item);
        var result = WithdrawAmountFactory(item, account);
        result.then(function (result) {
            if(result.success)
            $scope.WithdrawMessage = "Successful " + result.amount;
        });
    }
}

LandingPageController.$inject = ['$scope', 'WithdrawAmountFactory'];