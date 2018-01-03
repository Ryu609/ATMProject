var LandingPageController = function ($scope, WithdrawAmountFactory) {   

    $scope.Withdraw = function (item) {
        console.log(item);
        var result = WithdrawAmountFactory(item);
    }
}

LandingPageController.$inject = ['$scope', 'WithdrawAmountFactory'];